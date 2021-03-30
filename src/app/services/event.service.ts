import { Injectable } from '@angular/core'

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Event1 } from '../models/event';

@Injectable()
export class EventService {
  eventsCollection: AngularFirestoreCollection<Event1>
  eventDoc: AngularFirestoreDocument<Event1>

  constructor(private afs: AngularFirestore) {
    this.eventsCollection = this.afs.collection('events')
  }

  getEvents():Observable<Event1[]> {
    return this.eventsCollection.snapshotChanges().pipe(
      
      map( actions => actions.map(a => {
        const data = a.payload.doc.data() as Event1;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getPostData(id: string) {
    this.eventDoc = this.afs.doc<Event1>(`posts/${id}`)
    return this.eventDoc.valueChanges()
  }

  getPost(id: string) {
    return this.afs.doc<Event1>(`posts/${id}`)
  }

  create(data: Event1) {
    this.eventsCollection.add(data)
  }

  delete(id: string) {
    return this.getPost(id).delete()
  }

  update(id: string, formData) {
    return this.getPost(id).update(formData)
  }
}