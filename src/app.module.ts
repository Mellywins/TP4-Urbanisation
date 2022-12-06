import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
