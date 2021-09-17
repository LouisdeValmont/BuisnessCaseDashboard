import { Component,OnDestroy, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected: boolean;

  tokenSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe(
      (token: string) => {
        this.isConnected = !!token;
      });
  }

  onClickSignOut() {
this.authService
  .signOut()
  .then(()=>{
    this.router.navigateByUrl('auth')
  });
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe()
  }
}
