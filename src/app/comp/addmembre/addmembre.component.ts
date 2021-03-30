import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MembreService } from 'src/app/services/membre.service';
import { AngularFireStorage } from  '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmembre',
  templateUrl: './addmembre.component.html',
  styleUrls: ['./addmembre.component.css']
})
export class AddmembreComponent implements OnInit {

  constructor( private auth: AuthService,
    private MbrService: MembreService,
    private route :Router,
    private storage: AngularFireStorage) { }


  

    nom:string;
    photo:string;
    para:string;
    linkedin:string;
    github:string;


    uploadPercent: Observable<number>
    downloadURL: Observable<string>


  ngOnInit(): void {
  }


  createMbr() {
    const mbrData = {
      nom: this.nom,
      para: this.para,
      photo: this.photo || null,
      linkedin:this.linkedin,
      github: this.github
    }
    this.MbrService.create(mbrData)
   

    return this.route.navigate(['/membres'])
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `memberes/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
     this.storage.upload(path, file).then(() => {
      const ref = this.storage.ref(path);

      this.downloadURL = ref.getDownloadURL()
      
      console.log('Image Uploaded!')
     
       this.downloadURL.subscribe(url => (this.photo = url))
  
  });
     
    }
  }

}
