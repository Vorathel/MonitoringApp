import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperimentsNavigationPage } from './experiments-navigation';

@NgModule({
  declarations: [
    ExperimentsNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(ExperimentsNavigationPage),
  ],
})
export class ExperimentsNavigationPageModule {}
