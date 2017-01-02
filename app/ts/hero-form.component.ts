import {
    Component
} from '@angular/core';
import {
    HeroFormClass
} from './hero-form.class';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/ts/hero-form.component.html'
})
export class HeroFormComponent {

    public powers: string[] = ['1 Star', '2 Star', '3 Star', '4 Star'];

    /**
     *heroFM: Hero form module.
     */
    public heroFM: HeroFormClass = new HeroFormClass(6, 'parvesh', this.powers[0], 'First attempt for angular forms.');

    get formDebugger(): any {

        return JSON.stringify(this.heroFM);
    }

    constructor() {}


}
