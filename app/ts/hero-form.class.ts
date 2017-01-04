export class HeroFormClass {

    constructor(public id: number, public name: string, public power: string, public comment? : string) {}
}

export interface HeroFormValidationIC {

    name: string;
		power: string;
		comment: string;
}
