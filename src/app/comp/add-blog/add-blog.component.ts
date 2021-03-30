import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { AngularFireStorage } from  '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  content: string
  image: string
  title: string
  author: string
  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  constructor(
    private auth: AuthService,
    private postService: PostService,
    private route :Router,
    private storage: AngularFireStorage
  ) {



    
  }

  ngOnInit(): void {
    
  }


  createPost() {
    const postData = {
      author: this.author,
      content: this.content,
      image: this.image || null,
      published:new Date(),
      title: this.title
    }
    this.postService.create(postData)
    this.title = ''
    this.content = ''
    this.image = ''
    return this.route.navigate(['/blogs'])
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
     this.storage.upload(path, file).then(() => {
      const ref = this.storage.ref(path);

      this.downloadURL = ref.getDownloadURL()
      
      console.log('Image Uploaded!')
     
       this.downloadURL.subscribe(url => (this.image = url))
  
  });
     
    }
  }

}
