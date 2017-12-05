import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtlasExperimentPage } from './atlas-experiment';

@NgModule({
  declarations: [
    AtlasExperimentPage,
  ],
  imports: [
    IonicPageModule.forChild(AtlasExperimentPage),
  ],
})
export class AtlasExperimentPageModule {}
