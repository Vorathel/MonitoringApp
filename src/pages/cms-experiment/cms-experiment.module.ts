import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CmsExperimentPage } from './cms-experiment';

@NgModule({
  declarations: [
    CmsExperimentPage,
  ],
  imports: [
    IonicPageModule.forChild(CmsExperimentPage),
  ],
})
export class CmsExperimentPageModule {}
