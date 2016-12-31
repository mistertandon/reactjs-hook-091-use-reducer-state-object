import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import {
    Hero
} from './Hero.class';

import {
    HeroService
} from './hero.service';

import {
    ActivatedRoute,
    Params
} from '@angular/router';

import {
    Location
} from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/ts/hero-detail.component.html',
    styleUrls: ['app/ts/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    constructor(private heroServiceHDP: HeroService, private locationHDP: Location, private activatedRouteHDP: ActivatedRoute) {}


    @Input()
    heroHDCP: Hero;

    ngOnInit() {

//        this.activatedRouteHDP.params.switchMap((params: Params) => console.log(params));
    }
}
