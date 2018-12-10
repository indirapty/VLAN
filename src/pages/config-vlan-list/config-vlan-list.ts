import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfigVlanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-vlan-list',
  templateUrl: 'config-vlan-list.html',
})
export class ConfigVlanListPage {
 port: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.port = this.navParams.get('port');
    console.log(this.navParams.get('port'));
    console.log('ionViewDidLoad ConfigVlanListPage');
  }

}
