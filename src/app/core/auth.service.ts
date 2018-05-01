import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import {User} from "../model/user";
import {NavController} from "ionic-angular";
import {UserProfilePage} from "../../pages/user-profile/user-profile";


@Injectable()
export class AuthService {

  user: Observable<User>;
  navCtrl: NavController
  angularFireAuth: AngularFireAuth
  angularFirestore: AngularFirestore

  constructor(angularFireAuth: AngularFireAuth,
              angularFireStore: AngularFirestore) {
    this.angularFireAuth= angularFireAuth
    this.angularFirestore=angularFireStore;


    //// Get auth data, then get firestore user document || null
    this.user = this.angularFireAuth.authState
      .switchMap(user => {
        if (user) {
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })
  }


  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }


  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }


  signOut() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.navCtrl.push(UserProfilePage);
    });
  }
}
