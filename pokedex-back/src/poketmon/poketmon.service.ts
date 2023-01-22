import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import cheerio from 'cheerio';
import { InjectRepository } from '@nestjs/typeorm';
import { Poketmon } from 'src/models/poketmon.Entity';
import { ILike, Repository } from 'typeorm';
import poketmonStatus from './poketmon-status';

@Injectable()
export class PoketmonService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Poketmon)
    private poketmonRepository: Repository<Poketmon>,
  ) {}
  header = {
    headers: {
      'Content-Type': 'application/json',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:101.0) Gecko/20100101 Firefox/101.0',
    },
  };

  async getPoketmonList(page: number, perPage: number, search: string | null) {
    const [list, count] = await this.poketmonRepository.findAndCount({
      take: perPage,
      skip: (page - 1) * perPage,
      where: { name: search && ILike(`%${search}%`) },
    });
    return { poketmonList: list, count };
  }

  async getPoketmon(poketmonId: number) {
    return await this.poketmonRepository.findOneBy({ id: poketmonId });
  }

  async crolling() {
    try {
      for (let i = 1; i <= 1225; i++) {
        const poketmon = await this.getPoketmonCrolling(i);
        console.log('poketmon ::', poketmon);
        this.poketmonRepository.save({ ...poketmon, id: i });
      }
    } catch (e) {
      console.log('error ::', e);
    }
    return 'success crolling';
  }

  async crollingForStatus() {
    const url = `https://pokemon.fandom.com/ko/wiki/%EC%A2%85%EC%A1%B1%EA%B0%92_%EB%AA%A9%EB%A1%9D`;
    const html_data = await firstValueFrom(
      this.httpService.get(url, this.header),
    );
    const $: any = cheerio.load(html_data?.data);
    const list = $('tbody')
      .find('tr')
      .toArray()
      .map((x) =>
        $(x)
          .text()
          .replace('\n\n\n\n', ',')
          .replaceAll('\n\n', ',')
          .replaceAll('\n', '')
          .split(','),
      );
    const parse = list.map((v) => {
      return {
        num: v[0],
        name: v[1]?.split(' ')[0] ?? v[1],
        health: v[2],
        attack: v[3],
        defense: v[4],
        sAttack: v[5],
        sDefense: v[6],
        speed: v[7],
      };
    });
    return parse;
  }

  async getPoketmonPage() {
    const url = 'https://pokemonkorea.co.kr/pokedextemp/view/1';
    const payload = await firstValueFrom(
      this.httpService.get(url, this.header),
    );
    return payload?.data;
  }

  async getPoketmonCrolling(id: number) {
    const url = `https://pokemonkorea.co.kr/pokedextemp/view/${id}`;
    const html_data = await firstValueFrom(
      this.httpService.get(url, this.header),
    );
    const $: any = cheerio.load(html_data?.data);
    const num = Number($('h3 .font-lato').text().replace('No.', '').trim());
    const name = $('.col-lg-6> h3').text().split(' ')[2];
    const description = $('.descript').text();
    const type = $('.img-type').text().trim().split(' ').join(','); //타입
    const category = $('.bx-detail .col-4:nth-child(3) > p').text().trim(); //분류
    const attribute = $('.bx-detail .btn-char')
      .parent('div')
      .text()
      .trim()
      .split(' ')[0]; // 특성
    const image = $('.col-lg-6.col-12').first().find('img').attr('src');
    const poketmon = {
      num,
      name,
      description,
      type,
      category,
      attribute,
      image,
    };
    return poketmon as Poketmon;
  }

  async setAllPoketmonStatus() {
    poketmonStatus.forEach((poketmon) => {
      this.setPoketmonStatus(poketmon);
    });
  }

  async setPoketmonStatus(poketmonStatus) {
    this.poketmonRepository
      .createQueryBuilder()
      .update()
      .set({
        health: poketmonStatus.health,
        attack: poketmonStatus.attack,
        defense: poketmonStatus.defense,
        sAttack: poketmonStatus.sAttack,
        sDefense: poketmonStatus.sDefense,
        speed: poketmonStatus.speed,
      })
      .where('name= :name', { name: poketmonStatus.name })
      .execute();
  }
}
