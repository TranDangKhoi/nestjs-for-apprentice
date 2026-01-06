import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(":id")
  getPostById(@Param("id") id: string) {
    return this.postsService.getPostById(id);
  }

  @Get("/search")
  searchPost(@Query("title") title: string) {
    return this.postsService.searchPost(title);
  }

  @Put(":id")
  updatePost(@Param("id") id: string, @Body() body: { title: string }) {
    return this.postsService.updatePost(id, body);
  }

  @Post()
  createPost(@Body() body: { title: string }) {
    return this.postsService.createPost(body);
  }

  @Delete(":id")
  deletePost(@Param("id") id: string) {
    return this.postsService.deletePost(id);
  }
}
