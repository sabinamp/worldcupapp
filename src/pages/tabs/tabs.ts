import { Component } from '@angular/core';

import { StadiumsPage } from '../stadiums/stadiums';
import { HomePage } from '../home/home';
import {GroupsPage} from "../groups/groups";
import {TeamsPage} from "../teams/teams";
import {FavoritesPage} from "../favorites/favorites";
import {UserProfilePage} from "../user-profile/user-profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TeamsPage;
  tab3Root = StadiumsPage;
  tab4Root = GroupsPage;
  tab5Root = FavoritesPage;
  tab6Root = UserProfilePage;
  constructor() {

  }
}
