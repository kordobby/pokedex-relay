import { Test, TestingModule } from '@nestjs/testing';
import { PoketmonService } from './poketmon.service';

describe('PoketmonService', () => {
  let service: PoketmonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoketmonService],
    }).compile();

    service = module.get<PoketmonService>(PoketmonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
