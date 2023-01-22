import { Controller, Get, Param, Post } from '@nestjs/common';
import { PoketmonService } from './poketmon.service';

@Controller('poketmon')
export class PoketmonController {
  constructor(private readonly poketmonService: PoketmonService) {}

  @Get('crolling')
  crolling() {
    return this.poketmonService.crolling();
  }

  @Get('crolling/:id')
  getPoketmon(@Param('id') id) {
    return this.poketmonService.getPoketmonCrolling(id);
  }

  @Get('crolling-status')
  getPoketmonStatus() {
    return this.poketmonService.crollingForStatus();
  }

  @Post('update')
  setPoketmonUpdate() {
    return this.poketmonService.setAllPoketmonStatus();
  }
}
