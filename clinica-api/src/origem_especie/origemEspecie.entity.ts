import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity('origem_especies')
export class Origem_especies {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 10 })
    continente!: string;

    @Column({ length: 90 })
    regiao!: string;

    @Column({ type: 'text' })
    descricao!: string;

    @Column({ default: true })
    ativo!: boolean
}