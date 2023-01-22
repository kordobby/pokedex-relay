import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Poketmon {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  num: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  type: string;

  @Field(() => String)
  @Column()
  category: string;

  @Field(() => String)
  @Column()
  attribute: string;

  @Field(() => String)
  @Column()
  image: string;

  @Field(() => Int)
  @Column()
  attack: number;

  @Field(() => Int)
  @Column()
  health: number;

  @Field(() => Int)
  @Column()
  defense: number;

  @Field(() => Int)
  @Column()
  sAttack: number;

  @Field(() => Int)
  @Column()
  sDefense: number;

  @Field(() => Int)
  @Column()
  speed: number;
}
