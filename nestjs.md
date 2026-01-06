## Khái niệm

NestJS thực chất chỉ là Express/Fastify kèm theo phong cách code của Angular

## Giải thích một số khái niệm trong NestJS

Sơ lược kĩ càng tí trước khi code

### Các files có hậu tố .service.ts

Các files này thì trong NestJS thật ra nó sẽ được gọi là **Providers**, nhưng mình vẫn cứ đặt hậu tố cho files là **service.ts** cho thân thương giống như khi code Express, nhưng cứ giữ nguyên khái niệm trong đầu khi code NestJS rằng nó là **Providers** nha, không thì sẽ rất lú sau này

Thường các files **.service.ts** này sẽ chứa một decorator là `@Injectable()` để báo cho NestJS biết đây là một provider, và có thể được inject vào các module khác để sử dụng.

Ví dụ:

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsService {
  async getAllPosts() {
    return this.db.post.findMany();
  }

  async getPostById(id: string) {
    return this.db.post.findUnique({
      where: { id },
    });
  }
}
```

### Các files có hậu tố .module.ts

Các files này thì không chứa gì liên quan tới **business logic** hết mà chỉ chứa cấu hình phạm vi, nó để trả lời cho 3 câu hỏi:

1. Trong phạm vi module này, những provider nào có thể được inject?
2. Controller nào xử lý request?
3. Thằng này thì export ra cho thằng nào khác sử dụng?

Bằng cách hiểu đúng 4 trường sau, thì ta sẽ có thể trả lời được 3 câu hỏi trên:

```ts
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
```

`imports`: module khác mà module này cần
`providers`: service có thể inject trong module này
`exports`: thứ cho module khác dùng
`controllers`: entry point của HTTP requests

👉 Nếu không nằm trong module → Nest không biết tới sự tồn tại của nó và không động chạm gì nó luôn

> Tức là: Giả sử bạn có một file abc.service.ts, code hàng nghìn dòng trong đó, import 30-40 thư viện, nhưng nếu không import nó vào trong một file abc.module.ts và cũng không nhét vào trong providers thì môi trường runtime cũng không quan tâm tới nó luôn -> đồng nghĩa với việc bundle size không tăng (hiển nhiên roài)
>
> Còn nếu giả sử bạn có import nhưng mà không dùng, thì cũng chỉ có bundle size tăng thôi. Môi trường runtime cũng không quan tâm tới nó luôn, chạy vẫn phà phà như bình thường

Ví dụ cho dễ hiểu:

```ts
// TH1:
// File unused.service.ts code như sau:
import { Injectable } from '@nestjs/common';

@Injectable()
export class UnusedService {
  // Vô số logic trong này...
}

// unused.module.ts: không import, không gì hết
@Module({
  providers: [],
})
```

Và mọi thứ trong TH1 sẽ có kết cục như sau:

| Khía cạnh         | Kết quả |
| ----------------- | ------- |
| File được load    | ❌      |
| Decorator chạy    | ❌      |
| Lib import chạy   | ❌      |
| Provider được DI  | ❌      |
| Instance được tạo | ❌      |

-> Khi build code không tăng bundle size, runtime cũng không bị chậm đi hay đả động gì tới nó

```ts
// TH2: Có import service vào module nhưng không dùng
import { UnusedService } from './unused.service';

@Module({
  providers: [],
})
```

Và mọi thứ trong TH2 sẽ có kết cục như sau:

| Khía cạnh         | Kết quả |
| ----------------- | ------- |
| File được load    | ✅      |
| Decorator chạy    | ✅      |
| Lib import chạy   | ✅      |
| Provider được DI  | ❌      |
| Instance được tạo | ❌      |

-> Khi build code vẫn tăng bundle size, nhưng runtime không bị chậm đi hay đả động gì tới nó

### Các files có hậu tố .controller.ts

Dùng để map URL + HTTP method → nhảy vào method tương ứng với route đó, vậy thôi hết rồi
