import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-delailblog',
  templateUrl: './delailblog.component.html',
  styleUrls: ['./delailblog.component.css']
})
export class DelailblogComponent implements OnInit {
  postsCollection: AngularFirestoreCollection<Post>
  constructor( private postService:PostService, private actr:ActivatedRoute,private afs:AngularFirestore) {
   
    this.postsCollection=this.afs.collection('posts');

   }
  id
  date
  
  pipe = new DatePipe('en-US');
  post :Post={
    author: " ",
    content: " ",
    published: new Date(),
    image: " ",
    title: " "
  }
  ngOnInit(): void {
    this.postService.getPostData(this.actr.snapshot.params['id'])
       .subscribe(post =>{
           this.post = post ;
           this.date=this.pipe.transform(this.post.published.valueOf(),'dd MMMM YYYY')
           
          })
        }

}
