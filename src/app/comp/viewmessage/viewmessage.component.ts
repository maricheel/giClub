import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-viewmessage',
  templateUrl: './viewmessage.component.html',
  styleUrls: ['./viewmessage.component.css']
})
export class ViewmessageComponent implements OnInit {

  constructor(private msgService:MessageService) { }

  msgs: Msg[]; 
 
  ngOnInit(): void {
   
      this.msgService.getMsgs().subscribe(msgs=>{
        this.msgs=msgs 
        
      })
   
  
  }

}
