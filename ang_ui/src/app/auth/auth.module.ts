import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UiModule } from '../ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { Actions } from '@ngrx/effects';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, UiModule, ReactiveFormsModule],
})
export class AuthModule {}
