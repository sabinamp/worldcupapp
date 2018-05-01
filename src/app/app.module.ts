import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StadiumsPage} from '../pages/stadiums/stadiums';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {GroupsPage} from "../pages/groups/groups";
import {FavoritesPage} from "../pages/favorites/favorites";

// Import the AF2 Module
import {AngularFireModule} from 'angularfire2';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {TeamsPage} from "../pages/teams/teams";
import {TeamdetailsPage} from "../pages/teamdetails/teamdetails";
import {CoreModule} from "./core/core.module";
import {UserProfilePage} from "../pages/user-profile/user-profile";


@NgModule({
  declarations: [
    MyApp,
    StadiumsPage,
    HomePage,
    TabsPage,
    GroupsPage,
    TeamsPage,
    TeamdetailsPage,
    FavoritesPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    CoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StadiumsPage,
    HomePage,
    TeamsPage,
    TeamdetailsPage,
    TabsPage,
    GroupsPage,
    FavoritesPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
