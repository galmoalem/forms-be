import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Form } from './form-interface';
import { CreateFormDTO } from './form-dto';

@Injectable()
export class FormService {
    constructor(@InjectModel('Form') private readonly formModel: Model<Form>) { }
    // fetch all forms
    async getAllForms(): Promise<Form[]> {
        const forms = await this.formModel.find().exec();
        return forms;
    }
    // Get a single form
    async getForm(formID:string): Promise<Form> {
        const form = await this.formModel.findById(formID).exec();
        
        return form;
    }

    // post a single form
    async addForm(createFormDTO: CreateFormDTO): Promise<Form> {
        const newForm = await new this.formModel(createFormDTO);
        return newForm.save();
    }
    // Edit form details
    async updateForm(formID, createFormDTO: CreateFormDTO): Promise<Form> {

        let params = { 
            name: createFormDTO.name,
            ips: createFormDTO.ips, 
            isSubmit: createFormDTO.isSubmit,
            company : createFormDTO.company
    };
    
    for(let prop in params) if(!params[prop]) delete params[prop]; 


        const updatedForm = await this.formModel
            .findByIdAndUpdate(formID, params, { new: true });
        return updatedForm;
    }



  
}