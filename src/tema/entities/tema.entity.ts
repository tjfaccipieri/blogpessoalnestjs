import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';
import {IsNotEmpty } from 'class-validator'

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({length: 255, nullable: false})
  descricao: string
}