import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Tema } from 'src/tema/entities/tema.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @ApiProperty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  @IsNotEmpty()
  @ApiProperty()
  @Column({ length: 5000, nullable: true })
  anexo: string;

  @UpdateDateColumn()
  @ApiProperty()
  data: Date;

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  @ApiProperty({type: () => Tema})
  tema: Tema;

  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: 'CASCADE',
  })
  @ApiProperty({type: () => Usuario})
  usuario: Usuario;
}
