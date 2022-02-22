import { Injectable } from '@angular/core';

@Injectable()
export class GoogleSigninService {
  private auth2: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject();
  constructor() { 
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '416593747264-jh0j6t1rl2e0if4r63f7vhrvmn49hgqi.apps.googleusercontent.com'
      })
    });
  }

  public SignIn(){
    this.auth2.signIn(

    ).then(user => {

    }).catch(() => {

    });
  }

  public SignOut(){
    this.auth2.signOut(

    ).then(() => {

    })
  }

}