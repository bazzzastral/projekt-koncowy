import { Component, OnInit, ViewChild } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShips } from '../fighter-ships';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship';


@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  spaceShips: SpaceShip[] =[];
  selectedPilot: Pilot = null;


  constructor() { }

  ngOnInit(): void {
    this.spaceShips.push(new FighterShips(new Pilot('Elon Musk','/assets/first-pilot.png')));
    this.spaceShips.push(new BomberShip(new Pilot('Bruce Lee')));
    
  }
  assignPilot(spaceShip:SpaceShip):void{
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave(); 
  }
  deassignPilot(spaceShip:SpaceShip):void{
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null
  }
}
