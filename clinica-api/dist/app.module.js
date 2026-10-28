var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './tutores/tutor.entity.js';
import { Pet } from './pets/pet.entity.js';
import { Raca } from './racas/raca.entity.js';
import { Especie } from './especie/especie.entity.js';
import { Origem_especies } from './origem_especie/origemEspecie.entity.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map