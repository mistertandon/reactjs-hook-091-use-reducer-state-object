import {
Component,
    OnInit
} from '@angular/core';

import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms'

import {
    HeroFormClass
} from '../hero-form.class';

import {
    HeroFormValidationIC
} from '../hero-form.class';

@Component({
    selector: 'hero-form-reactive',
    templateUrl: 'app/ts/hero-form-reactive/hero-form-reactive.component.html',
    styleUrls: ['app/ts/hero-form-reactive/hero-form-reactive.component.css']

})
export class HeroFormReactiveComponent implements OnInit {

    public heroFormReactive: FormGroup;

    public powerFIE: string[] = ['Hard-working', 'Determined', 'Creative', 'Learner'];

    public heroFormReactiveIO: HeroFormValidationIC = new HeroFormClass(2, 'Parvesh', this.powerFIE[1], 'Impressive');

    public formValidationsFields: HeroFormValidationIC = {

        "name": ""

    };

    public formValidationsFieldsMessages: Object = {

        'name': {
            'required': 'Provide Hero name.',
            'minlength': 'Hero name must be 4 characters longs.',
            'maxlength': 'Hero name must not be greater then 10 characters long.'
        }

    };

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {

        this.buildHeroFormReactive();
    }

    buildHeroFormReactive(): void {

        this.heroFormReactive = this.fb.group({

            'name': [this.heroFormReactiveIO.name, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(10)
            ]]
        });

        this.heroFormReactive.valueChanges
            .subscribe(

                (subscribedData) => {

                    this.checkFormFieldsValidationHFRCM();
                }
            );

        this.checkFormFieldsValidationHFRCM();


    }
    checkFormFieldsValidationHFRCM(): void {

        if (!this.heroFormReactive) {

            return;
        }
        const FORM = this.heroFormReactive;

        for (let formField in this.formValidationsFields) {

            let fieldControl = FORM.get(formField);

            this.formValidationsFields[formField] = "";

            if (fieldControl && fieldControl.dirty && fieldControl.invalid) {

                for (let validation in fieldControl.errors) {

                    this.formValidationsFields[formField] += this.formValidationsFieldsMessages[formField][validation];
                }

            }

        }

    }
}
