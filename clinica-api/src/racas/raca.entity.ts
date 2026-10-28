import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity('racas')
export class Raca {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50 })
    nome!: string;

    @Column({ length: 7 })
    porte!: string;

    @Column({ type: 'int' })
    expectativaVida!: number;

    @Column({ default: true })
    ativo!: boolean

}