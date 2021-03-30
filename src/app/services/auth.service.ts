import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app'
import "firebase/auth";


@Injectable()
export class AuthService {
  authState: any = null

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => this.authState = data)
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }

  login() {
    return new Promise((resolve,reject)=>{
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then((userData)=> resolve(userData),(error)=>reject(error))
  })
  }
  logout() {
    this.afAuth.signOut()
  }
}