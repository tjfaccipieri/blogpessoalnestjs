import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';
import {IsNotEmpty } from 'class-validator'

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({length: 100, nullable: false})
  titulo: string
  
  @IsNotEmpty()
  @Column({length: 1000, nullable: false})
  texto: string

  @IsNotEmpty()
  @Column({length: 5000, nullable: true})
  anexo: string

  @UpdateDateColumn()
  data: Date

}