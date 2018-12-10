import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ConfigPcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-pc',
  templateUrl: 'config-pc.html',
})
export class ConfigPcPage {
  pc: string;
  ipadress: string
  subnetmask:string
  gateway:  string
  dns: string
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
                this.pc = navParams.get('pc');  
  }

  ionViewDidLoad() {  
    if(this.pc=='0'){
      this.ipadress = '192.168.10.10';
      this.subnetmask = '255.255.255.0';
      this.gateway = '0.0.0.0';
      this.dns = '0.0.0.0';
    }else{
      this.ipadress = '192.168.10.20'
      this.subnetmask = '255.255.255.0';
      this.gateway = '0.0.0.0';
      this.dns = '0.0.0.0';
    }
  }
  goBack(){
    this.viewCtrl.dismiss();
  }
}
