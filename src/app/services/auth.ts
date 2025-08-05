import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private app: FirebaseApp = initializeApp(env.FIREBASE_CONFIG);
  private auth = getAuth(this.app);

  login(email: string, pass: string) {
    return from(signInWithEmailAndPassword(this.auth, email, pass)).pipe(
      tap({
        next: (response) => {
          console.log('logged in');
        },
        error: (err) => console.log(err),
      })
    );
  }
}
