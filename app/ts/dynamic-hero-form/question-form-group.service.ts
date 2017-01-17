import {
    Injectable
} from '@angular/core';

import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

import {
    QuestionText
} from './question-text';

import {
    QuestionSelect
} from './question-select';

@Injectable()
export class QuestionFormGroupService {

    constructor() {}

    getQuestionFormGroupQFGSM(questionsArray: [QuestionText | QuestionSelect]): FormGroup {

        let questionFormGroup: any = {};

        questionsArray.forEach(

            (questionObject) => {

                questionFormGroup[questionObject.key] = (questionObject.required === true) ?
                    new FormControl(questionObject.value || "", Validators.required) :
                    new FormControl(questionObject.value || "");
            }
        );

        return new FormGroup(questionFormGroup);
    }
}
