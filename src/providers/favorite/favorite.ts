import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteTeams';
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  constructor(public storage: Storage) {
    console.log('Hello FavoriteProvider Provider');
  }
  isFavorite(teamId) {
    return this.getAllFavoriteTeams().then(result => {
      return result && result.indexOf(teamId) !== -1;
    });
  }

  getAllFavoriteTeams() {
    return this.storage.get(STORAGE_KEY);
  }

  addToFavoriteTeams(teamId) {
    return this.getAllFavoriteTeams().then(result => {
      if (result) {
        result.push(teamId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [teamId]);
      }
    });
  }

  removeFromFavorites(teamId) {
    return this.getAllFavoriteTeams().then(result => {
      if (result) {
        var index = result.indexOf(teamId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
}
