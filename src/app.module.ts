import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet/entities/pet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'my_user',
      password: 'password123',
      database: 'my_database',
      entities: [Pet],
      synchronize: true,
    }),
    PetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
