import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigVlanListPage } from './config-vlan-list';

@NgModule({
  declarations: [
    ConfigVlanListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigVlanListPage),
  ],
})
export class ConfigVlanListPageModule {}
