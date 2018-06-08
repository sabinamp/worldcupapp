import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StadiumsPage } from '../pages/stadiums/stadiums';
import { HomePage } from '../pages/home/home';
import { GroupsPage} from "../pages/groups/groups";
import { FavoritesPage} from "../pages/favorites/favorites";
import {StadiumsModalPage} from "../pages/stadiums-modal/stadiums-modal";

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {AngularFirestore, AngularFirestoreModule} from "angularfire2/firestore";
import {TeamsPage} from "../pages/teams/teams";
import {TeamdetailsPage} from "../pages/teamdetails/teamdetails";
import { FavoriteProvider } from '../providers/favorite/favorite';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    StadiumsPage,
    HomePage,
    GroupsPage,
    TeamsPage,
    TeamdetailsPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StadiumsPage,
    HomePage,
    TeamsPage,
    TeamdetailsPage,
    GroupsPage,
    FavoritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirestore,
    FavoriteProvider
  ]
})
export class AppModule {}
