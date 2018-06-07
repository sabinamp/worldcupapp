import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import {Team} from "../../app/model/team";
import {TeamdetailsPage} from "../teamdetails/teamdetails";
import {FirestoreProvider} from "../../providers/firestore/firestore";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
  providers: [FirestoreProvider]
})
export class FavoritesPage {
  favouriteTeams: Team[] = [];
  allteams: Team[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public favoriteProvider: FavoriteProvider, private firebaseService: FirestoreProvider) {
    this.firebaseService.initializeTeams();
    this.allteams = this.firebaseService.getTeams();
    console.log(this.allteams);    
    favoriteProvider.getAllFavoriteTeams().then((val) => {
      if(val){
        console.log('Your favourite teams', val);     
        this.setUserFavouriteTeams(val);
        console.log(this.favouriteTeams);
      }
      else{
        console.log("this user has no favourite teams");
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }
  getUserFavouriteTeams(){
    return this.favouriteTeams;
     
   }
  setUserFavouriteTeams(val:any[]){
      for(let cid of val){          
          this.favouriteTeams.push(this.transform(this.allteams, cid)[0]);          
      }        
  }

  onClick(team) {
    this.navCtrl.push(TeamdetailsPage, team);
  }
  transform(items: any[], id: number): any[] {
    if(!items) return [];
    if(!id) return items;
    
    return items.filter( it => {
      return it.id === id; // only filter country id
    });
  }
}
