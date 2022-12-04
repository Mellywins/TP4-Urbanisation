import { PartialType } from '@nestjs/mapped-types';
import { CreateEmplyeeDto } from './create-emplyee.dto';

export class UpdateEmplyeeDto extends PartialType(CreateEmplyeeDto) {}
