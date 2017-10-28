import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Paste in your credentials that you saved earlier
var firebaseConfig = {
  apiKey: "AIzaSyC1NH7dp0rOsKDSGoXjMi05j0M0rHlfzZU",
  authDomain: "searchstore-f213d.firebaseapp.com",
  databaseURL: "https://searchstore-f213d.firebaseio.com",
  projectId: "searchstore-f213d",
  storageBucket: "searchstore-f213d.appspot.com",
  messagingSenderId: "443518179473"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
