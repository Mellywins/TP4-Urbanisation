import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';

@Module({
  imports: [],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
