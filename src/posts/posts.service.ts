import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsService {
  getAllPosts() {
    return "All posts";
  }

  getPostById(id: string) {
    return "Post with id: " + id;
  }

  searchPost(title: string) {
    return "Search post with title: " + title;
  }

  createPost(post: { title: string }) {
    return "Post created with title: " + post.title;
  }

  updatePost(id, post: { title: string }) {
    return "Post with id: " + id + " updated with title: " + post.title;
  }

  deletePost(id) {
    return "Post with id: " + id + " deleted";
  }
}
