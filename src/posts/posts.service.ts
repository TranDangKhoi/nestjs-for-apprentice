import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsService {
  getAllPosts() {
    return "All posts";
  }

  getPostById(id: string) {
    return "Post with id: " + id;
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
