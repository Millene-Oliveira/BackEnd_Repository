import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity('especies')

export class Especie {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 30 })
    nomePopular!: string;

    @Column({ length: 50 })
    nomeCientifico!: string;

    @Column({ type: 'text' })
    descricao!: string;

    @Column({ default: true })
    domestico!: boolean

    @Column({ default: true })
    ativo!: boolean
}