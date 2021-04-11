import * as mongoose from 'mongoose';

export const FormSchema = new mongoose.Schema({

    name: String,

    ips: [{
        type: String
    }],

    company: String,

    isSubmit : Boolean
})