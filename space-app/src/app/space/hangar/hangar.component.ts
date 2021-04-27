import { Component, OnInit } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShips } from '../fighter-ships';
import { Pilot } from '../pilot';
import { SpaceShip } from '../space-ship';
@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] =[];


  constructor() { }

  ngOnInit(): void {
    this.spaceShips.push(new FighterShips(new Pilot('Elon Musk','/assets/first-pilot.png')));
    this.spaceShips.push(new BomberShip(new Pilot('Bruce Lee')));
    console.log(this.spaceShips);
  }

}
