import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { FormService } from './form-service';
import { CreateFormDTO } from './form-dto';

@Controller('forms')
export class FormController {
    constructor(private formService: FormService) { }

    // add a form
    @Post('/create')
    async addForm(@Res() res, @Body() createFormDTO: CreateFormDTO) {
        const form = await this.formService.addForm(createFormDTO);
        return res.status(HttpStatus.OK).json({
            message: "Form has been created successfully",
            form: form
        })
    }

    // Retrieve form list
    @Get('/all')
    async getAllForm(@Res() res) {
        const forms = await this.formService.getAllForms();
        return res.status(HttpStatus.OK).json(forms);
    }

    @Get('form/:formID')
    async getForm(@Res() res, @Param('formID') formID) {
        const form = await this.formService.getForm(formID);
        if (!form) throw new NotFoundException('form does not exist!');
        return res.status(HttpStatus.OK).json(form);
    }


    @Put('/update')
    async updateForm(@Res() res, @Query('formId') formId, @Body() CreateFormDTO: CreateFormDTO) {
        const form = await this.formService.updateForm(formId, CreateFormDTO);
        if (!form) throw new NotFoundException('form does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'form has been successfully updated',
            form: form
        });
    }
}