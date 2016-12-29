import {
    Component,
    OnInit
} from '@angular/core';

import {
    Hero
} from './Hero.class';

import {
    HEROS
} from './mock-heros';

import {
    HeroService
} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/heros-master.component.html',
    styleUrls: ['app/ts/heros-master.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {

    title = 'Tours of Heros :-)';
    heroACP: Hero[];
    selectedHeroACP: Hero;

    constructor(private heroService: HeroService) {}

    getHeroesListACM(): void {

        this.heroService.getHerosHSM().then(herosList => this.heroACP = herosList);
    }

    ngOnInit() {

        this.getHeroesListACM();
    }

    onSelectHeroACM(hero: Hero) {

        this.selectedHeroACP = hero;
    }
}
