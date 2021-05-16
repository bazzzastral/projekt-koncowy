import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { BomberShip } from './bomber-ship';
import { FighterShips } from './fighter-ships';
import { OrderFromValue } from './order-from-value';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

static shipProductionTime = 2000;

hangarShips = new BehaviorSubject<SpaceShip[]>([])

  constructor() { }

  produceShips(formValue:OrderFromValue):Observable<SpaceShip>{
    const shipClass = formValue.shipType === SpaceShipType.Fighter ? FighterShips : BomberShip
    
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(()=> new shipClass()),
      take(formValue.shipCount),
      tap((spaceShip)=> this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );

  }
}
