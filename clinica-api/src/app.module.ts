import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './tutores/tutor.entity.js';
import { Pet } from './pets/pet.entity.js';
import { Raca } from './racas/raca.entity.js';
import { Especie } from './especie/especie.entity.js';
import { Origem_especies } from './origem_especie/origemEspecie.entity.js';

@Module({

  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'clinicaVet_db',
      entities: [Tutor, Pet, Raca, Especie, Origem_especies],
      synchronize: true,
      logging: true,

    }),
  ],
})

export class AppModule {}