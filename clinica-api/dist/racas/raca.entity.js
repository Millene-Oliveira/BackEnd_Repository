var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
let Raca = class Raca {
    id;
    nome;
    porte;
    expectativaVida;
    ativo;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Raca.prototype, "id", void 0);
__decorate([
    Column({ length: 50 }),
    __metadata("design:type", String)
], Raca.prototype, "nome", void 0);
__decorate([
    Column({ length: 7 }),
    __metadata("design:type", String)
], Raca.prototype, "porte", void 0);
__decorate([
    Column({ type: 'int' }),
    __metadata("design:type", Number)
], Raca.prototype, "expectativaVida", void 0);
__decorate([
    Column({ default: true }),
    __metadata("design:type", Boolean)
], Raca.prototype, "ativo", void 0);
Raca = __decorate([
    Entity('racas')
], Raca);
export { Raca };
//# sourceMappingURL=raca.entity.js.map