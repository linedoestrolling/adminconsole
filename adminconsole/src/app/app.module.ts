import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';

const firebaseconfig = {
  apiKey: "AIzaSyDeO751BeCWdaOvM3E7b4hxYGblS6Zgc1I",
  authDomain: "adminconsole-1febb.firebaseapp.com",
  databaseURL: "https://adminconsole-1febb.firebaseio.com",
  projectId: "adminconsole-1febb",
  storageBucket: "",
  messagingSenderId: "585206183074"
};

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
