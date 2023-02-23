"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicationModule = void 0;
const common_1 = require("@nestjs/common");
const comunication_controller_1 = require("./controller/comunication.controller");
const find_one_service_1 = require("./services/find-one.service");
const create_service_1 = require("./services/create.service");
let ComunicationModule = class ComunicationModule {
};
ComunicationModule = __decorate([
    (0, common_1.Module)({
        controllers: [comunication_controller_1.ComunicationController],
        providers: [find_one_service_1.FindOneService, create_service_1.CreateService]
    })
], ComunicationModule);
exports.ComunicationModule = ComunicationModule;
//# sourceMappingURL=comunication.module.js.map