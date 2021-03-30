import { Component, OnInit } from '@angular/core';
import { Membre } from 'src/app/models/membre';
import { AuthService } from 'src/app/services/auth.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  constructor(private mbrService : MembreService,public auth: AuthService) { }
  membres: Membre[]; 
 
  ngOnInit(): void {
   
      this.mbrService.getMembre().subscribe(membres=>{
        this.membres=membres 
        
      })
   
  
  }
  delete(id: string) {
    this.mbrService.delete(id)
  }

}
