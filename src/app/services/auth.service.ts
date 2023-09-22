import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { 
		this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
	}
		
	
   async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserDataT(credential.user);
  }

  public updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
	
    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName,
	  userScore: user.userScore,
	  numberOfRatings: user.numberOfRatings,
	  canEdit: user.canEdit,
    courses: user.courses,
    voted: user.voted,
	  
    } 
	
	    return userRef.set(data, { merge: true })
  }
  
    public updateUserDataT(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
	
    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName
    } 
	
	    return userRef.set(data, { merge: true })
  }
  
  
  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  }
