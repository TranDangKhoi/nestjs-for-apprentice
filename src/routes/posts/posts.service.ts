import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/services/prisma.service";

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllPosts() {
    return this.prismaService.post.findMany();
  }

  getPostById(id: string) {
    return this.prismaService.post.findFirst({
      where: { id },
    });
  }

  searchPost(title: string) {
    return "Search post with title: " + title;
  }

  createPost(post: { title: string; content: string; authorId: string }) {
    return this.prismaService.post.create({
      data: {
        title: post.title,
        content: post.content,
        authorId: post.authorId,
      },
    });
  }

  updatePost(id, post: { title: string }) {
    return "Post with id: " + id + " updated with title: " + post.title;
  }

  deletePost(id) {
    return "Post with id: " + id + " deleted";
  }
}
