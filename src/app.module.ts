import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet/entities/pet.entity';
import { EmplyeeModule } from './emplyee/emplyee.module';
import { Emplyee } from './emplyee/entities/emplyee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'my_user',
      password: 'password123',
      database: 'my_database',
      entities: [Pet, Emplyee],
      synchronize: true,
    }),
    PetModule,
    EmplyeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
