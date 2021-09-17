import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errMsg: string;

  id : string;
  password: string;

  constructor(private authService: AuthService,
              private  router:Router) {
  }

  ngOnInit(): void {
  }

  //deuxieme methode
  onSumbitAuthForm() {


    this.authService
      .signIn(this.id, this.password)
      .then(() => {
        this.router.navigateByUrl('dashboard');
      })
      .catch((errMsg: string) => {
        //recuperation msg d'erreur avec le form
        this.errMsg = errMsg;
      })
    console.log(this.id);
    console.log(this.password);
  }
}
