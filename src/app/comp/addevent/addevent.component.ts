import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { AngularFireStorage } from  '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  image: string

  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  constructor(
    private auth: AuthService,
    private eventService: EventService,
    private route :Router,
    private storage: AngularFireStorage
  ) {
}

  ngOnInit(): void {
  }

  createPost() {
    const eventData = {
 
      image: this.image || null,

    }
    this.eventService.create(eventData)
  
    this.image = ''
    return this.route.navigate(['/event'])
  }


 uploadImage(event) {
    const file = event.target.files[0]
    const path = `evnts/${file.name}`
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
