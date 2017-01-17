import {
    Component,
    OnInit
} from '@angular/core';

import {
	FormGroup
} from '@angular/forms';

import {
    DynamicHeroFormQuestionComponent
} from './dynamic-hero-form-question.component';

import {
    QuestionService
} from './question.service';

import {
    QuestionFormGroupService
} from './question-form-group.service';

import {
    QuestionBase
} from './question.base';

import {
    QuestionText
} from './question-text';

import {
    QuestionSelect
} from './question-select';

@Component({
    templateUrl: 'app/ts/dynamic-hero-form/dynamic-hero-form.component.html',
    styleUrls: ['app/ts/dynamic-hero-form/dynamic-hero-form.component.css'],
    providers: [QuestionService, QuestionFormGroupService]
})
export class DynamicHeroFormComponent implements OnInit {

    public form: FormGroup;

    public questionsArr: [QuestionText | QuestionSelect];

    constructor(private Question_Service: QuestionService, private Question_Form_Group_Service: QuestionFormGroupService) {

    }

    ngOnInit(): void {

        this.questionsArr = this.Question_Service.getQuestions();
        this.form = this.Question_Form_Group_Service.getQuestionFormGroupQFGSM(this.questionsArr);
    }

    onSubmit(): void {
				console.log(this.form);
    }
}
