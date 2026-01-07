# Vietnamese version

Oki, tiếng Việt trước nhóe

## Tổng quan về NestJS

Có vẻ như NestJS được xây dựng dựa trên Express (mặc định), hoặc bạn có thể chuyển sang Fastify nếu muốn. Nhưng mà chung quy lại thì, cả 2 Express và Fastify đều có đặc điểm hiệu năng khác nhau và có những pattern riêng mà bạn nên tuân theo.

Nó là sự kết hợp của OOP (Lập trình hướng đối tượng), FP (Lập trình hàm) và cả FRP (Lập trình phản ứng hàm, theo như mình được biết) — nói chung là một mô hình lai.

Đọc thêm thằng [nestjs.md](nestjs.md) để biết thêm chi tiết.

### Hiệu năng

Vì framework này được xây dựng trên Express, nên nó không nhanh bằng Fastify hoặc Express thuần - Hiển nhiên rồi, vì nó là Express kẹp thêm DLCs =))). Tuy vậy, nó vẫn đủ nhanh cho phần lớn các ứng dụng.

### Có khó học không

Có, cũng hơi khó nếu bạn vừa du học từ Express sang. Có rất nhiều khái niệm mới cần tiếp thu, nhưng mà cứ chill — bạn sẽ thấy công sức bỏ ra là hoàn toàn xứng đáng.

Ngược lại, nếu bạn đã quen với Angular hoặc Spring và có nền tảng NodeJS vững, thì việc học NestJS sẽ nhẹ nhàng.

À, và có một điều cực kỳ rõ ràng cần phải nói: framework này được sinh ra để phục vụ các ứng dụng quy mô lớn nên mấy apps nhỏ thì nên xem xét sử dụng cái khác - Fastify chẳng hạn.

---

# English version:

Aight, English version here we go

## NestJS overview

So apparently, this NestJS thing is built on top of Express (by default) or you can switch it to Fastify if you prefer, each of them has different performance characteristics and different patterns that you should follow.

It's a combination of OOP (Object-Oriented Programming), FP (Functional Programming) and also FRP (Functional Reactive Programming, as I've heard), it's a bit of a hybrid.

Please read the [nestjs.md](nestjs.md) file for more details.

### Performance

Because this thing is built on top of Express, so it's not as fast as Fastify or Express (duh, because it's Express with extra features). That said, it’s still fast enough for the majority of applications.

### Is it hard to learn

Yes, it's pretty hard if you've just shifted from Express to this. There're a lot of new concepts to take in, but just embrace it and you'll find it's totally worth the effort.

On the other hand, if you're already familiar with Angular or Spring + a solid grasp of NodeJS, then it's going to be a breeze.

Oh yeah and one crystal-clear thing that I need to mention that this framework is meant for large scale apps.

### Here come the default README!

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
