import {
    QuestionBase
} from './question.base';

export class QuestionText extends QuestionBase {

    public controlType: string = 'text';

    public type: string;

    constructor(options: any) {

        super(options); 
        this.type = options.type || 'text';

    }

}
