import {
    Component,
    OnInit
} from '@angular/core';

import {
    Hero
} from './Hero.class'

import {
    HeroService
} from './hero.service';

@Component({
    selector: 'dashboard-heros',
    templateUrl: 'app/ts/dashboard.component.html',
    styleUrls: ['app/ts/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private heroService: HeroService) {}

    dashboardHeroesDCP: Hero[];

    getDashboardHeroes(): void {

        this.heroService.getHerosHSM().then( heroes => this.dashboardHeroesDCP = heroes.slice(1, 3));
				console.log(this.dashboardHeroesDCP);

    }

    ngOnInit() {

        this.getDashboardHeroes();
    }

}
