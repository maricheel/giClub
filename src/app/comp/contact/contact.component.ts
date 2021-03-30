import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public auth: AuthService,
    private MsgService: MessageService,
    private route :Router,
   ) { }

    nom:string;
    email:string;
    msg:string;
   


  ngOnInit(): void {
  }


  createMsg() {
    const mail = {
      nom: this.nom,
      email: this.email,
      msg: this.msg,
    }
    this.MsgService.create(mail)
    
    return this.route.navigate(['/'])
  }

}
