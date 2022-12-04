import { Module } from '@nestjs/common';
import { EmplyeeService } from './emplyee.service';
import { EmplyeeController } from './emplyee.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Emplyee } from './entities/emplyee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Emplyee])],
  controllers: [EmplyeeController],
  providers: [EmplyeeService],
})
export class EmplyeeModule {}
