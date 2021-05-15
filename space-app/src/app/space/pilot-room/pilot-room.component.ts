import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';


@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot>()
  pilots: Pilot[] =[];
  selectedPilot: Pilot =null;

  constructor() { }

  ngOnInit(): void {
    this.pilots.push(new Pilot('Fredie Mercury', './assets/mercury-pilot.png'))
    this.pilots.push(new Pilot('Tom Araya'))
  }

  select(pilot: Pilot):void {
    this.selectedPilot = pilot;
      this.selected.emit(pilot)
  }
  pilotLeave(pilot:Pilot):void {

  }
  pilotReturn(pilot:Pilot):void {

  }
}
