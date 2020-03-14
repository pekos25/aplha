import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  GoogleAuth() {
    // return this.AuthLogin(new firebase.auth.GoogleAuthProvider());

   // Auth logic to run auth providers with signInWithRedirect
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers with signInWithPopup

  // AuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //   .then((result) => {
  //       console.log('You have been successfully logged in!')
  //   }).catch((error) => {
  //       console.log(error)
  //   })
  // }

  logout() {
    this.afAuth.auth.signOut();
  }
}
