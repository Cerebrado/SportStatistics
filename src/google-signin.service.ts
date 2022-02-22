import { Injectable } from '@angular/core';

@Injectable()
export class GoogleSigninService {

  constructor() { 
    gapi.load();
  }

}