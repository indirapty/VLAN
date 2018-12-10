import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectPage } from '../project/project';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openProject(){
    this.navCtrl.push(ProjectPage);
  }
    
}
