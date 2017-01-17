export class QuestionBase {

    public label: string;
    public key: string;
    public value: string | number;
    public required: boolean;
    public orderNumber: number;
    public controlType: string;

    constructor(options: {
        label ? : string,
        key ? : string,
        value ? : string | number,
        required ? : boolean,
        orderNumber ? : number,
        controlType ? : string

    }) {

        this.label = options.label || '';
        this.key = options.key || '';
        this.value = options.value || '';
        this.required = options.required || false;
        this.orderNumber = options.orderNumber || 1;
        this.controlType = options.controlType || '';

    }
}
