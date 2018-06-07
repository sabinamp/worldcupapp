import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TeamsPage} from '../pages/teams/teams';
import { GroupsPage} from '../pages/groups/groups';
import {StadiumsPage} from '../pages/stadiums/stadiums';
import {FavoritesPage} from '../pages/favorites/favorites';
import {TeamdetailsPage} from "../pages/teamdetails/teamdetails";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Teams', component: TeamsPage },
      { title: 'Group Matches', component: GroupsPage },
      { title: 'Stadiums', component: StadiumsPage },
      { title: 'Favourite Teams', component: FavoritesPage }
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
