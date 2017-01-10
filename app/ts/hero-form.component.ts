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

    public heroFIO: HeroFormClass = new HeroFormClass(6, 'parvesh', this.powers[0], "Musculuos Hero.");

    public formErrorsObj: Object;

    public formValidationFields: any = {

        power: "",
        comment: ""
    };

    public formValidationFieldsMessage: any = {
        power: {
            'required': 'Enter Hero power.',
        },

        comment: {
            'required': 'Provide comments for Hero.',
            'minlength': 'Provided comments must be atleast 5 characters long.',
            'maxlength': 'Provided comments must not be greater then 10 characters long.'
        }
    };

    public isSubmitted: boolean = false;

    get formDebugger(): any {

        return JSON.stringify(this.heroFIO);
    }

    ngAfterViewChecked() {

        this.checkFormFieldsValidationHFCM();
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

    checkFormFieldsValidationHFCM(): void {

        if (!this.currentHeroAddFormTR) {

            return;
        }

        this.currentHeroAddFormTR_REF = this.currentHeroAddFormTR;

        this.currentHeroAddFormTR_REF.valueChanges.
        subscribe(

            (subscribedData) => {

                this.accumulateFormFieldsValidationMessagesHFCM(subscribedData);
            }
        );
    }

    accumulateFormFieldsValidationMessagesHFCM(subscribedData: any): void {

        const formRef: any = this.currentHeroAddFormTR_REF.form;

        for (const fieldsName in this.formValidationFields) {

            let fieldControl = formRef.get(fieldsName);

            this.formValidationFields[fieldsName] = "";

            if (fieldControl && fieldControl.errors && fieldControl.invalid) {

                for (const validationRuleName in fieldControl.errors) {

                    this.formValidationFields[fieldsName] += this.formValidationFieldsMessage[fieldsName][validationRuleName]
                }

            }
        }
    }

}
