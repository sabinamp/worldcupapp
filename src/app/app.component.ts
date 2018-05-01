import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {AngularFirestore} from "angularfire2/firestore";
import {AngularFireAuth} from "angularfire2/auth";
import {AuthGuard} from "./core/auth.guard";
import {AuthService} from "./core/auth.service";
import {UserProfilePage} from "../pages/user-profile/user-profile";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: TabsPage;
  authGuard: AuthGuard

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, angularFirestore: AngularFirestore,
              angularFireAuth: AngularFireAuth) {
    this.authGuard = new AuthGuard(new AuthService(angularFireAuth, angularFirestore));
    // this.rootPage = this.authGuard.puedeLoguearse() ? TabsPage: UserProfilePage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
