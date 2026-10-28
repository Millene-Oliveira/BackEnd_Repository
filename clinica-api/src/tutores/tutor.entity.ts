import { truncate } from "node:fs";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

@Entity('tutores')

export class Tutor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50, nullable: true })
    nome!: string;

    @Column({ unique: true })
    cpf!: string //INCLUINDO OS PONTOS E HÍFENS

    @Column({ length: 80 })
    email!: string;

    @Column({ type: 'int' })
    telefone!: number;

    @Column({ length: 60 })
    endereco!: string;

    @Column({ default: true })
    ativo!: boolean
}