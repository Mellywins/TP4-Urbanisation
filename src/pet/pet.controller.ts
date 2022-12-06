import { Controller, Get, Logger, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class PetController {
  private logger: Logger;
  constructor() {
    this.logger = new Logger('PetController');
  }

  @Get('/dayOfWeek/:id')
  findAll(@Res() res: Response, @Param('id') id: number) {
    this.logger.log('Get request: /dayOfWeek');
    const map = {
      1: 'Sunday',
      2: 'Monday',
      3: 'Tuesday',
      4: 'Wednesday',
      5: 'Thursday',
      6: 'Friday',
      7: 'Saturday',
    };
    console.log(id);
    if (id > 7 || id < 1 || isNaN(id) || id === undefined) {
      // Return error in XML
      res.set('Content-Type', 'text/xml');
      res.status(400);
      res.send(
        '<?xml version="1.0" encoding="UTF-8"?>' +
          '<error>Invalid day of the week</error>',
      );
      return;
    }
    // Return the day of the week in XML format
    res.set('Content-Type', 'text/xml');
    res.send(
      '<?xml version="1.0" encoding="UTF-8"?>' +
        '<dayOfWeek>' +
        map[id] +
        '</dayOfWeek>',
    );
  }

  @Get('/monthOfYear/:id')
  findOne(@Res() res: Response, @Param('id') id: number) {
    const map = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };
    if (id > 12 || id < 1 || isNaN(id) || id === undefined) {
      // Return error in XML
      res.set('Content-Type', 'text/xml');
      res.status(400);

      res.send(
        '<?xml version="1.0" encoding="UTF-8"?>' +
          '<error>Invalid month of the year</error>',
      );
      return;
    }
    // Return the month of the year in XML format
    res.set('Content-Type', 'text/xml');
    res.send(
      '<?xml version="1.0" encoding="UTF-8"?>' +
        '<monthOfYear>' +
        map[id] +
        '</monthOfYear>',
    );
    this.logger.log('Get request: /monthOfYear' + id);
  }
}
