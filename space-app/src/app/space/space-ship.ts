export class SpaceShip {
    
        modelName: string;
        imgUrl:  string;
        health: number;
        activeShields: boolean;
        activeWeapons: boolean

        constructor(modelName: string, imgUrl: string){
            this.modelName = modelName;
            this.imgUrl = imgUrl;
        }
    }