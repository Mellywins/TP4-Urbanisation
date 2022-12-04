import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  private logger: Logger;
  constructor(private readonly petService: PetService) {
    this.logger = new Logger('PetController');
  }

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    this.logger.log('Post request: /', createPetDto);
    return this.petService.create(createPetDto);
  }

  @Get()
  findAll() {
    this.logger.log('Get request: /');
    return this.petService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.log('Get request: /' + id);
    return this.petService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    this.logger.log('Patch request: /' + id, updatePetDto);
    return this.petService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.log('Delete request: /' + id);
    return this.petService.remove(+id);
  }
}
