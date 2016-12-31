import {
    Injectable
} from '@angular/core';

import {
    Hero
} from './Hero.class';

import {
    HEROS
} from './mock-heros';

@Injectable()
export class HeroService {

    getHerosHSM(): Promise < Hero[] > {

        return Promise.resolve(HEROS);
    }

    getHeroDetailHSM(heroId: number): Promise < Hero > {

        return Promise.resolve({
            id: 11,
            name: 'Mr. Nice'
        });
    }
}
