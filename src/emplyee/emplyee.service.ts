import { Emplyee } from './entities/emplyee.entity';
import { Injectable } from '@nestjs/common';
import { CreateEmplyeeDto } from './dto/create-emplyee.dto';
import { UpdateEmplyeeDto } from './dto/update-emplyee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmplyeeService {
  constructor(
    @InjectRepository(Emplyee)
    private employeeRepo: Repository<Emplyee>,
  ) {}
  async create(createEmplyeeDto: CreateEmplyeeDto) {
    return this.employeeRepo.save(createEmplyeeDto);
  }

  async findAll() {
    return this.employeeRepo.find();
  }

  async findOne(id: number) {
    return this.employeeRepo.findOne({ where: { id } });
  }

  async update(id: number, updateEmplyeeDto: UpdateEmplyeeDto) {
    return this.employeeRepo.update({ id: id }, updateEmplyeeDto);
  }

  async remove(id: number) {
    return this.employeeRepo.delete({ id });
  }

  async salaryDollars(id: number) {
    const e = await this.employeeRepo.findOne({ where: { id } });
    return { salary: e.salaryDollars };
  }

  async salaryEuro(id: number) {
    const e = await this.employeeRepo.findOne({ where: { id } });
    return { salary: e.salaryDollars * 0.97 };
  }
}
