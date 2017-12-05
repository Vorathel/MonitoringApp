import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AliceExperimentPage } from './alice-experiment';

@NgModule({
  declarations: [
    AliceExperimentPage,
  ],
  imports: [
    IonicPageModule.forChild(AliceExperimentPage),
  ],
})
export class AliceExperimentPageModule {}
