import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigSwitchPage } from './config-switch';

@NgModule({
  declarations: [
    ConfigSwitchPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigSwitchPage),
  ],
})
export class ConfigSwitchPageModule {}
