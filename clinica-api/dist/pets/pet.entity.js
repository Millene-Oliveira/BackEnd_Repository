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
let Pet = class Pet {
    id;
    nome;
    dataNascimento;
    sexo;
    peso;
    cor;
    castrado;
    ativo;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Pet.prototype, "id", void 0);
__decorate([
    Column({ length: 50 }),
    __metadata("design:type", String)
], Pet.prototype, "nome", void 0);
__decorate([
    Column({ type: 'date' }),
    __metadata("design:type", Date)
], Pet.prototype, "dataNascimento", void 0);
__decorate([
    Column({ length: 9 }),
    __metadata("design:type", String)
], Pet.prototype, "sexo", void 0);
__decorate([
    Column({ type: 'decimal', precision: 3, scale: 2 }),
    __metadata("design:type", Number)
], Pet.prototype, "peso", void 0);
__decorate([
    Column({ length: 10 }),
    __metadata("design:type", String)
], Pet.prototype, "cor", void 0);
__decorate([
    Column({ default: false }),
    __metadata("design:type", Boolean)
], Pet.prototype, "castrado", void 0);
__decorate([
    Column({ default: true }),
    __metadata("design:type", Boolean)
], Pet.prototype, "ativo", void 0);
Pet = __decorate([
    Entity('pets')
], Pet);
export { Pet };
//# sourceMappingURL=pet.entity.js.map