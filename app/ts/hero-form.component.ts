import {
    Component,
    ViewChild,
    AfterViewChecked
} from '@angular/core';

import {
    NgForm
} from '@angular/forms'

import {
    HeroFormClass,
    HeroFormValidationIC
} from './hero-form.class';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/ts/hero-form.component.html',
    styleUrls: ['app/ts/hero-form.component.css']
})
export class HeroFormComponent implements AfterViewChecked {

    /*
     *currentHeroAddFormTR			: Current heroAddForm template reference.
     *currentHeroAddFormTR_REF	: Reference variable to "Current heroAddForm template reference".
     *
     */
    public currentHeroAddFormTR_REF: NgForm;

    @ViewChild('heroAddFormTR') currentHeroAddFormTR: NgForm;

    public powers: string[] = ['1 Star', '2 Star', '3 Star', '4 Star'];

    public heroFIO: HeroFormClass = new HeroFormClass(6, 'parvesh', this.powers[0], "First attempt for angular forms.");

    public formErrors: any = {

        name: "",
        power: "",
        comment: ""
    };

    public isSubmitted: boolean = false;

    get formDebugger(): any {

        return JSON.stringify(this.heroFIO);
    }

    ngAfterViewChecked() {

        this.onValueChangedHFCM();
    }
			
		/**
		 *Function used to call when user wants to reset "Hero Add" form explicitly by clicking on
		 *<New Hero> buuton.
		 *
		 **/
    resetNewHeroHFCM() {

    }

    cancelSubmittedFormHFCM(): void {

        this.isSubmitted = false;
    }
			
    onSubmitHFCM() {

        this.isSubmitted = true;
    }

    onValueChangedHFCM(): any {

        if (this.currentHeroAddFormTR === this.currentHeroAddFormTR_REF) {

            return;
        }
        this.currentHeroAddFormTR = this.currentHeroAddFormTR_REF;

    }
}
