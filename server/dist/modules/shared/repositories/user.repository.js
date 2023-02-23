"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_helper_1 = require("../helpers/prisma.helper");
let UserRepository = UserRepository_1 = class UserRepository {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(UserRepository_1.name);
    }
    async findOne({ where }) {
        this.logger.debug(this.findOne.name, where);
        return this.prisma.user.findUnique({
            where
        });
    }
    async findAll({ skip, take, cursor, where, orderBy }) {
        return this.prisma.user.findMany({
            skip, take, cursor, where, orderBy
        });
    }
    async create(data) {
        this.logger.debug(this.create.name, data);
        try {
            return this.prisma.user.create({ data });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update({ where, data }) {
        try {
            return this.prisma.user.update({ where, data });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(where) {
        try {
            return this.prisma.user.delete({ where });
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
UserRepository = UserRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_helper_1.PrismaHelper])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map