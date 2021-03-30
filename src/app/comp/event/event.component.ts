import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event1 } from 'src/app/models/event';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Observable<Event1[]>
  constructor(private eventService: EventService,public auth: AuthService) { }



  ngOnInit(): void {
    this.events = this.eventService.getEvents()
    
  }
  delete(id: string) {
    this.eventService.delete(id)
  }
}
