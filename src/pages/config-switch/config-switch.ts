import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConfigVlanListPage } from '../config-vlan-list/config-vlan-list';


/**
 * Generated class for the ConfigSwitchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-switch',
  templateUrl: 'config-switch.html',
})
export class ConfigSwitchPage {
  vlan10: string
  vlan10name: string
  exit: string
  consoleinput: string
  vlan20: string
  vlan20name: string
  exit2: string
  configure: string
  configurodesc: string;
  interface10: string
  modeaccess10: string
  accessvlan10: string
  exitconfig10: string
  interface20: string
  modeaccess20: string
  accessvlan20: string
  exitconfig20: string
  showvlan: string
  showvlan2: string
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.consoleinput = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigSwitchPage');
  }

  onKey(value: string){
    this.consoleinput = '';
    switch(value){
      case 'vlan 10': this.vlan10 = value                
                    break;
      case 'NAME vlan 10':  this.vlan10name = 'Switch(config) #' + ' '+value;
                    break;
      case 'exit': this.exit = 'Switch(config) #'+ value;
                    break;
      case 'vlan 20': this.vlan20 = 'Switch(config) #' + value;
                    break;
      case 'NAME vlan 20': this.vlan20name = 'Switch(config) #' + ' '+value;
                    break;
      case 'exit.': this.exit2 = 'Switch(config) #'+ value;
                    break;
      case 'SHOW VLAN': this.showvlan = 'Switch# ' + value;
                      this.navCtrl.push(ConfigVlanListPage,{'port': false});
                    break;
      case 'configure': this.configure = 'Switch#'+ value;
                        this.configurodesc = 'Configuring from terminal, memory, or network [terminal]? Enter configuration commands, one per line. End with CNTL/Z';
                        break;
      case 'interface range f0/10-15': this.interface10 =  'Switch(config) #' + value;
                        break;
      case 'switchport mode access vlan 10': this.modeaccess10 = 'Switch(config-if-range) #' + value;
                        break;
      case 'switchport access vlan 10': this.accessvlan10 = 'Switch(config-if-range) #' + value;
                        break;
      case 'exit config': this.exitconfig10 = 'Switch(config-if-range) #exit' + value;
                        break;
      case 'interface range f0/16-20': this.interface20 = 'Switch(config) #' + value;
                        break;
      case 'switchport mode access vlan 20': this.modeaccess20 = 'Switch(config-if-range) #' + value;
                        break;
      case 'switchport access vlan 20': this.accessvlan20 = 'Switch(config-if-range) #' + value;
                        break;                  
      case 'SHOW VLAN PORTS': this.showvlan2 = 'Switch# ' + value;
                        this.navCtrl.push(ConfigVlanListPage, {'port': true});
                        break;
      
    }
  }
  goBack(){
    this.viewCtrl.dismiss();
  }
}
