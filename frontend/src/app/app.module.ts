import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { userReducer } from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effect';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({user: userReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
