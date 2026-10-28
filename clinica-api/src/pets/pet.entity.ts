import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity('pets')

export class Pet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50 })
    nome!: string;

    @Column({ type: 'date' })
    dataNascimento!: Date;

    @Column({ length: 9 })
    sexo!: string;

    @Column({ type: 'decimal', precision: 3, scale: 2 })
    peso!: number;

    @Column({ length: 10 })
    cor!: string;

    @Column({ default: false })
    castrado!: boolean;

    @Column({ default: true })
    ativo!: boolean
}