import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyBL4zikMsclmHLrDRvKNd80oBSMEHH84-w",
  authDomain: "ng-note.firebaseapp.com",
  databaseURL: "https://ng-note.firebaseio.com",
  storageBucket: "ng-note.appspot.com",
  messagingSenderId: "122563905220"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
