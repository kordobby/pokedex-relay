import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Poketmon } from './models/poketmon.Entity';
import { PoketmonModule } from './poketmon/poketmon.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Poketmon],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
    PoketmonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
