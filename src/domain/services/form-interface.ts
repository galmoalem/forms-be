import { Document } from 'mongoose';

export interface Form extends Document {

    readonly name: string;

    readonly ips: [{
        type: String
    }];

    readonly company: string;

    readonly isSubmit: boolean;

}