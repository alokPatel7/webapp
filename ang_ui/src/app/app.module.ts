import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effect';
import { authReducer } from './reduers/auth. reducer';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

const effects = [AuthEffects];

const reducers = combineReducers({
  auth: authReducer,
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    UiModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([...effects]),
    AuthModule,
    HttpClientModule,
  ],
  providers: [Actions],
  bootstrap: [AppComponent],
})
export class AppModule {}
