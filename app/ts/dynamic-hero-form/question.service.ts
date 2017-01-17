import {
    Injectable
} from '@angular/core';

import {
    QuestionBase
} from './question.base';

import {
    QuestionText
} from './question-text';

import {
    QuestionSelect
} from './question-select';

@Injectable()
export class QuestionService {

    getQuestions(): any {

        let questionsArr: [QuestionText | QuestionSelect];

        questionsArr = [

            new QuestionText({
                'label': 'First Name',
                'key': 'first_name',
                'type': 'text',
                'value': 'parvesh',
                'required': true,
                'orderNumber': 1

            }),
            new QuestionSelect({
                'label': 'Power',
                'key': 'power',
                'type': 'select',
                'options': [{
                    "key": 0,
                    "value": "Select Power"
                }, {
                    "key": 1,
                    "value": "Confident"
                }, {
                    "key": 2,
                    "value": "Hard-Working"
                }, {
                    "key": 3,
                    "value": "Determined"
                }],
                'required': true,
                'orderNumber': 2

            })

        ];

        return questionsArr;

    }
}
