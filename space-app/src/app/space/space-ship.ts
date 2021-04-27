import { Pilot } from "./pilot";

export class SpaceShip {
    
        modelName: string;
        imgUrl:  string;
        health: number;
        activeShields: true;
        activeWeapons: false;
        pilot: Pilot;

        constructor(modelName: string, imgUrl: string, pilot: Pilot){
            this.modelName = modelName;
            this.imgUrl = imgUrl;
            this.pilot = pilot;
        }

       
    }