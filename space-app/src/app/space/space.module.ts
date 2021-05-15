import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { SpaceRoutingModule } from './space-routing.module';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { PilotComponent } from './pilot/pilot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';



@NgModule({
  declarations: [
    HangarComponent,
    SpaceShipComponent,
    PilotRoomComponent,
    PilotComponent,
    EngineersRoomComponent
    
  ],
  exports: [
    HangarComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class SpaceModule { }
