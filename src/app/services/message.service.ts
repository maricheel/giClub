import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Msg } from '../models/msg';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  msgCollection:AngularFirestoreCollection <Msg> 
  msgDocument:AngularFirestoreDocument <Msg>

  constructor(private afs:AngularFirestore) { 
    this.msgCollection=this.afs.collection('msg');
  }
  getMsgs():Observable<Msg[]>{
    return this.afs.collection('msg').snapshotChanges().pipe(
      map( actions => actions.map(a => {
        const data = a.payload.doc.data() as Msg;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  create(data: Msg) {
    this.msgCollection.add(data)
  }
}
