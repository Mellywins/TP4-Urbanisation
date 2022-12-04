import { Test, TestingModule } from '@nestjs/testing';
import { EmplyeeService } from './emplyee.service';

describe('EmplyeeService', () => {
  let service: EmplyeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmplyeeService],
    }).compile();

    service = module.get<EmplyeeService>(EmplyeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
