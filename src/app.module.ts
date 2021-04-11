import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {FormModule} from './domain/form-module';


@Module({
  imports: [
    FormModule,
    MongooseModule.forRoot('mongodb://localhost:27017/form12', { useNewUrlParser: true , useFindAndModify: false  })

  ],
})
export class AppModule {}
