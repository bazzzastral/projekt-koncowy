
export class Pilot {
    firstName: string;
    lastName: string;
    imgUrl: string;

    static defaultImgUrl = 'assets/unknown-pilot.png'
    constructor(fullName:string, imgUrl= Pilot.defaultImgUrl){
        this.fullName = fullName;
        this.imgUrl = imgUrl;
    }
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value: string){
        const values = value.split(' ');
        this.firstName = values[0];
        this.lastName = values[1];
    }
}
