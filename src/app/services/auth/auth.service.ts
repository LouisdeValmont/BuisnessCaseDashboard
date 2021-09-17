import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signIn(id: string, password: string): Promise<void | string> {

    return new Promise<void | string>(
      //res -> resolve, rej -> reject
      (res, rej) => {

        setTimeout(() => {

          if(id === 'LaFace' && password === 'aa'){
            this.token.next('aaui');
            res();
          }
          else{
            rej('les identifiants sont incorrects.')
          }
        }, 300);
      }
    );
  }

  signOut(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    );

  }
}
