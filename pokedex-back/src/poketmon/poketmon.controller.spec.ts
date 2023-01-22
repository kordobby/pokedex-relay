import { Test, TestingModule } from '@nestjs/testing';
import { PoketmonController } from './poketmon.controller';

describe('PoketmonController', () => {
  let controller: PoketmonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoketmonController],
    }).compile();

    controller = module.get<PoketmonController>(PoketmonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
