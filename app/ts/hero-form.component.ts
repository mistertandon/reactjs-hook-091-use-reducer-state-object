import {
    Component,
    ViewChild,
    ElementRef
} from '@angular/core';

import {
    NgForm
} from '@angular/forms'

import {
    HeroFormClass
} from './hero-form.class';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/ts/hero-form.component.html',
    styleUrls: ['app/ts/hero-form.component.css']
})
export class HeroFormComponent {

    @ViewChild('name') input: ElementRef;

    public powers: string[] = ['1 Star', '2 Star', '3 Star', '4 Star'];

    /**
     *heroFIO: Hero form module.
     */
    public heroFIO: HeroFormClass = new HeroFormClass(6, 'parvesh', this.powers[0], 'First attempt for angular forms.');

    public isSubmitted: boolean = false;

    get formDebugger(): any {

        return JSON.stringify(this.heroFIO);
    }

    constructor() {}

    ngAfterViewInit() {

        console.log(this.input);
    }

    addNewHero() {

    }
    cancelSubmission(): void {

        this.isSubmitted = false;
    }

    onSubmit(formControlsReference: NgForm) {

        this.isSubmitted = true;
        /*
         *formControlsReference: From angular template we have passed NgForm directive reference using 'Temporary template variable'
         */
        console.log(formControlsReference);
    }
}
