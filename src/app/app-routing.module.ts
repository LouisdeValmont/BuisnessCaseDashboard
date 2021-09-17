import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { DashBoardComponent } from './views/dash-board/dash-board.component';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'', canActivate: [AuthGuard], component: DashBoardComponent},
  {path:'dashboard', canActivate: [AuthGuard], component: DashBoardComponent},
  {path: 'auth', component: AuthViewComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
