import {Component} from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {FavoriteProvider} from '../../providers/favorite/favorite';

/**
 * Generated class for the TeamdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamdetails',
  templateUrl: 'teamdetails.html',
  providers: [FavoriteProvider]
})
export class TeamdetailsPage {
  team: any;
  isFavorite = false;

  constructor(private navContr: NavController,
              private navParams: NavParams,
              private favoriteProvider: FavoriteProvider) {
    this.team = this.navParams.data;
    this.favoriteProvider.isFavorite(this.team.id).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  favoriteTeam() {
    this.favoriteProvider.addToFavoriteTeams(this.team.id).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteTeam() {
    this.favoriteProvider.removeFromFavorites(this.team.id).then(() => {
      this.isFavorite = false;
    });
  }

  ionViewDidLoad() {
    console.log('TeamdetailsPage Started');
  }

}
