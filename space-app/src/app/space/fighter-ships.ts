import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';


export class FighterShips  extends SpaceShip{
    constructor(pilot? : Pilot){
        super('Rocky','/assets/statek.png', pilot)
    }
}
