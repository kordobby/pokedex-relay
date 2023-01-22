import { Args, Query, Resolver } from '@nestjs/graphql';
import { Poketmon } from 'src/models/poketmon.Entity';
import { PoketmonService } from 'src/poketmon/poketmon.service';

@Resolver('Poketmon')
export class PoketmonResolver {
  constructor(private poketmonService: PoketmonService) {}

  @Query()
  async getPoketmonList(
    @Args('PoketmonListInput') PoketmonListInput,
  ): Promise<{ poketmonList: Poketmon[]; count: number }> {
    return await this.poketmonService.getPoketmonList(
      PoketmonListInput?.page ?? 1,
      PoketmonListInput?.perPage ?? 10,
      PoketmonListInput?.search ?? null,
    );
  }

  @Query()
  async getPoketmon(@Args('PoketmonInput') PoketmonInput): Promise<Poketmon> {
    return await this.poketmonService.getPoketmon(PoketmonInput?.id);
  }
}
