import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the Game3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game3',
  templateUrl: 'game3.html',
})
export class Game3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToMap() {
    console.log("Navigating...");
    this.navCtrl.push(MapPage);
  }

  navigateToPayment() {
    console.log("Navigating...");
    this.navCtrl.push(PaymentPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game3Page');
  }

}
