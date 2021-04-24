import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';



@NgModule({
  declarations: [
    HangarComponent,
    SpaceShipComponent
    
  ],
  exports: [
    HangarComponent
  ],
  imports: [
    CommonModule
    
  ]
})
export class SpaceModule { }
