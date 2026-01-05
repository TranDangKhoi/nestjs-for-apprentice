## Dự án nho nhỏ để làm quen NestJS

Nhậu thử một em nhỏ nhắn trước khi làm em dự án múp hơn

### Mô tả qua dự án (chức năng, luồng, công nghệ, v.v...)

Trước hết về **chức năng**:

- Authentication: Đăng ký, đăng nhập tài khoản
- Chức năng chính: Upload các bài posts

Tiếp theo là về công nghệ:

- DB: SQLite
- ORM: Prisma

> ORM (Object-Relational Mapping) giúp ta dễ dàng tương tác với database hơn thông qua ngôn ngữ lập trình dễ hiểu chứ không phải những dòng lệnh SQL khó hiểu

Ví dụ:

```javascript
const createMany = await prisma.user.createMany({
  data: [
    { name: "Bob", email: "bob@prisma.io" },
    { name: "Bobo", email: "bob@prisma.io" }, // Duplicate unique key!
    { name: "Yewande", email: "yewande@prisma.io" },
    { name: "Angelique", email: "angelique@prisma.io" },
  ],
  skipDuplicates: true, // Skip 'Bobo'
});
```

Thay vì

```sql
INSERT INTO user (name, email)
VALUES
  ('Bob', 'bob@prisma.io'),
  ('Bobo', 'bob@prisma.io'),
  ('Yewande', 'yewande@prisma.io'),
  ('Angelique', 'angelique@prisma.io')
ON CONFLICT (email) DO NOTHING;
```

---

**Vả lại thêm một tiện ích nữa**, Prisma sẽ tự động chuyển đổi datatype từ Prisma ORM Types sang Datatype của Database tương ứng, ví dụ nếu trong Prisma ta định nghĩa như sau:

```typescript
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

Thì trong SQLite sẽ được chuyển đổi thành:

```sql
CREATE TABLE "User" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "email" TEXT NOT NULL,
  "name" TEXT?
);
```

> Đọc thêm: [Các kiểu dữ liệu trong Prisma](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-field-scalar-types)

### Phân tích CSDL

Ok, với những chức năng được liệt kê sau:

- Người dùng đăng ký tài khoản: email, name, password, confirm password
- Người dùng đăng nhập: email, password
- Người dùng đăng bài post: title, content
- Áp dụng JWT cho việc xác thực người dùng, tích hợp Access Token và Refresh Token: Access Token sẽ là stateless, Refresh Token sẽ lưu trên database (stateful)
- Một người dùng có thể có nhiều post
- Một người dùng có thể đăng nhập trên nhiều thiết bị => Có nhiều Refresh Token cho mỗi người dùng

Ta có thể suy ra được rằng trước mắt sẽ cần tạo 3 bảng: Users, Posts, RefreshTokens

> Đọc thêm: [Quy tắc đặt tên bảng theo Prisma](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#naming-conventions)
