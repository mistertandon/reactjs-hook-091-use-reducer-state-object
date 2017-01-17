import {
    Component,
    Input
} from '@angular/core';

import {
    FormGroup
} from '@angular/forms';

import {
    QuestionText
} from './question-text';

import {
    QuestionSelect
} from './question-select';

@Component({
    selector: 'dynamic-question',
    templateUrl: 'app/ts/dynamic-hero-form/dynamic-hero-form-question.component.html',
    styleUrls: ['app/ts/dynamic-hero-form/dynamic-hero-form-question.component.css']
})
export class DynamicHeroFormQuestionComponent {

    @Input() questionObj: QuestionText | QuestionSelect;

    @Input() form: FormGroup;

    get isValid() {

        return this.form.controls[this.questionObj.key].valid;
    }
}
