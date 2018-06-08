import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FirestoreProvider} from "../../providers/firestore/firestore";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirestoreProvider]

})
export class HomePage {

  //mydate: string = ''

  constructor() {
    //this.mydate = "2018-06-14T17:00:00+05:00";
  }

  counterfirstmatch() {
    // 2018-06-14T17:00:00+05:00
    // get total seconds between the times
    var actualDate = new Date().getTime()
    var futureDate = new Date("June 14, 2018 17:00:00")

    var delta = Math.abs(futureDate.getTime() - actualDate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = delta % 60;  // in theory the modulus is not required

    if (seconds == null) {
      seconds = 0;
    }

    return "Starts in " + days + " days " + hours + "h " + minutes + "m "
    //+ seconds + "s "
  }
}
