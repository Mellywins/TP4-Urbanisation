import { Test, TestingModule } from '@nestjs/testing';
import { EmplyeeController } from './emplyee.controller';
import { EmplyeeService } from './emplyee.service';

describe('EmplyeeController', () => {
  let controller: EmplyeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmplyeeController],
      providers: [EmplyeeService],
    }).compile();

    controller = module.get<EmplyeeController>(EmplyeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
