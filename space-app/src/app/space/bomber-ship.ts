import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';
export class BomberShip extends SpaceShip{
    constructor(pilot?: Pilot){
        super('Rambo','/assets/statek.png', pilot)
    }
}
