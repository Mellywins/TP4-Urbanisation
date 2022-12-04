# Report Urbanisation

Group members :

- Wadhah Mahrouk

- Ali Achour

- Amal Missaoui

## Technology choice

### Backend

Typescript/NestJS : A node JS frameworkr highly similiar to Spring boot

### Database

postgresql

You will find the dump in `dump.sql`

## Creating the project

```bash
nest new ds-urba
```

### The employee model

```ts
@Entity()
export class Emplyee {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public salaryDollars: number;
}
```

### The controller and API endpoints

Endpoints in nestJS are defined in controllers like `src/emplyee/emplyee.controller.ts`

```ts
@Controller('employee')
export class EmplyeeController {
  constructor(private readonly emplyeeService: EmplyeeService) {}

  @Post()
  create(@Body() createEmplyeeDto: CreateEmplyeeDto) {
    return this.emplyeeService.create(createEmplyeeDto);
  }

  @Get()
  findAll() {
    return this.emplyeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emplyeeService.findOne(+id);
  }

  @Get(':id/salary-euro')
  salaryEuro(@Param('id') id: string) {
    return this.emplyeeService.salaryEuro(+id);
  }
  @Get(':id/salary-dollar')
  salaryDollar(@Param('id') id: string) {
    return this.emplyeeService.salaryDollars(+id);
  }
  // ....
```

## RAML api

You will find the api defined in `doc/api/spec.raml`

```raml
#%RAML 1.0
resourceTypes:
  Collection:
    get:
      responses:
        200:
          body:
            application/json:
              type: <<item>>[]
    post:
      body:
        application/json:
          type: <<item>>
  Member:
    get: 
      responses : 
        200 : 
          body:
            application/json:
              type: <<item>>
    delete:
      responses:
        204:
    put:
      body:
        application/json:
          type: <<item>>
  Salary:
    get:
      responses:
        200:
          body:
            application/json:
              properties:
                salary: number

title: My-API
version: v1
baseUri: http://localhost:3000
types:
  Employee:
    properties:
      id: number
      name: string
      salaryDollars: number

/employee:
  type: { Collection: {item : Employee} }
  /{id}:
    type: { Member: {item : Employee} }
    /salary-euro:
      type: Salary
    /salary-dollar:
      type: Salary
```

## Endpoint studio screenshots

### Anypoint console

![](doc/screenshots/Screenshot%20from%202022-11-29%2017-13-11.png)
![](doc/screenshots/Screenshot%20from%202022-11-29%2017-13-15.png)
![](doc/screenshots/Screenshot%20from%202022-11-29%2017-13-24.png)

## Consuming our api service from Anypoint studio

![](doc/screenshots/Screenshot%20from%202022-11-29%2017-18-26.png)
