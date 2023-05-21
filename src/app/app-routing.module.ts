import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
