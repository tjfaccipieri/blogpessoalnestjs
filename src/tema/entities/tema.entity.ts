import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import {IsNotEmpty } from 'class-validator'
import { Postagem } from 'src/postagem/entities/postagem.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty() 
  @Column({length: 255, nullable: false})
  descricao: string

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  @ApiProperty({type: () => Postagem}) 
  postagem: Postagem[]
}