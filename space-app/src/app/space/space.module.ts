import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarComponent } from './hangar/hangar.component';



@NgModule({
  declarations: [
    HangarComponent
  ],
  exports:[
    HangarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpaceModule { }
