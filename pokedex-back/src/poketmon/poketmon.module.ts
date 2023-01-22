import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PoketmonService } from './poketmon.service';
import { PoketmonController } from './poketmon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poketmon } from 'src/models/poketmon.Entity';
import { PoketmonResolver } from 'src/resolvers/poketmon.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Poketmon]), HttpModule],
  providers: [PoketmonResolver, PoketmonService],
  controllers: [PoketmonController],
})
export class PoketmonModule {}
