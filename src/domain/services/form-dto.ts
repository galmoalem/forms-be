export class CreateFormDTO {
    readonly name: string;
    readonly ips: [{
        type: String
    }];
    readonly company: string;
    readonly isSubmit: boolean;

}