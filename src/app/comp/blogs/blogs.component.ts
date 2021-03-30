import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  posts: Observable<Post[]>
  constructor(private postService: PostService,public auth: AuthService) { }

  


  ngOnInit(): void {
    this.posts = this.postService.getPosts()
   
  }
  delete(id: string) {
    this.postService.delete(id)
  }

}
