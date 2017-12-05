import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-experiments-navigation',
  templateUrl: 'experiments-navigation.html',
})
export class ExperimentsNavigationPage {
  menuBefehl : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ExperimentsNavigationPage -> constructor');
  }

  ionViewDidLoad() {
    console.log('ExperimentsNavigationPage -> ionViewDidLoad');
  }

}
