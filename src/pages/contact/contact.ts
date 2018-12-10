import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
ping: boolean;
pingvlan: boolean;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad (){
    this.ping = false;
    this.pingvlan = false;
  }

  click(){
this.ping = true;
this.pingvlan = false;
  }
  clickvlan(){
    this.ping = false;
this.pingvlan = true;
  }
}
