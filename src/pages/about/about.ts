import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ConfigPcPage } from '../config-pc/config-pc';
import { ConfigSwitchPage } from '../config-switch/config-switch';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public modal: ModalController) {

  }

  openPcConfig(pc: string){
    let chooseModal = this.modal.create(ConfigPcPage, {'pc': pc});
    chooseModal.present();
  }
  
  openPcSwitch(){
    let chooseModal = this.modal.create(ConfigSwitchPage);
    chooseModal.present();
  }
}
