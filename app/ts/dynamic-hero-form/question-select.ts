import {
    QuestionBase
} from './question.base';

export class QuestionSelect extends QuestionBase {

    public controlType: string = 'select';

    public selectOptions: {
        key: string | number,
        value: string | number
    } = {
        key: 0,
        value: 'Select Option'
    };

    constructor(options: {} = {}) {

        super(options);
        this.selectOptions = options['options'] || this.selectOptions;
    }

}
