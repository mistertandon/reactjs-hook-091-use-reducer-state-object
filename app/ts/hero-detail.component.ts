import {
    Component,
    Input
} from '@angular/core';

import {
    Hero
} from './Hero.class';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/ts/hero-detail.component.html',
    styleUrls: ['app/ts/hero-detail.component.css']
})
export class HeroDetailComponent {

    @Input()
    heroHDCP: Hero;
}
