import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { SCREEN_TYPES } from '../models/common.model';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    // data: [SCREEN_TYPES.SIGNIN],
    children: [
      {
        path: 'signin',
        component: LoginComponent,
        pathMatch: 'full',
        data: [SCREEN_TYPES.SIGNIN],
      },
      {
        path: 'signup',
        component: SignUpComponent,
        pathMatch: 'full',
        data: [SCREEN_TYPES.SIGNUP],
      },
      {
        path: 'reset-password',
        component: ForgotPasswordComponent,
        pathMatch: 'full',
        data: [SCREEN_TYPES.FORGET_PASSWORD],
      },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
