import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Membre } from '../models/membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {
  membreCollection:AngularFirestoreCollection <Membre> 
  membreDocument:AngularFirestoreDocument <Membre>

  constructor(private afs:AngularFirestore) { 
    this.membreCollection=this.afs.collection('members');
  }
  getMembre():Observable<Membre[]>{
    return this.afs.collection('members').snapshotChanges().pipe(
      map( actions => actions.map(a => {
        const data = a.payload.doc.data() as Membre;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  create(data: Membre) {
    this.membreCollection.add(data)
  }
  getMbr(id: string) {
    return this.afs.doc<Membre>(`members/${id}`)
  }
  delete(id: string) {
    return this.getMbr(id).delete()
  }

}
