import { Injectable, Logger } from "@nestjs/common";
import { PrismaHelper } from "../helpers/prisma.helper";
import { IUser } from "../interfaces/iuser";

@Injectable()
export class UserRepository implements IUser {
    protected logger = new Logger(UserRepository.name)
    constructor(private prisma: PrismaHelper) {}

    async findOne({ where }: { where: Record<string, unknown>; }): Promise<Comunication.Response> {
        this.logger.debug(this.findOne.name, where)
        return this.prisma.user.findUnique({
            where
        })
    }

    async findAll({ skip, take, cursor, where, orderBy }: { skip?: number; take?: number; cursor?: { id: number; }; where?: Record<string, unknown>; orderBy?: Record<string, unknown>; }): Promise<Comunication.Response[]> {
        return this.prisma.user.findMany({
            skip, take, cursor, where, orderBy
        })
    }

    async create(data: Comunication.Data): Promise<Comunication.Response> {
        this.logger.debug(this.create.name, data)
        try {
            return this.prisma.user.create({ data })
        } catch (error) {
            throw new Error(error)
        }
    }

    async update({ where, data }: { where?: Record<string, unknown>; data: Comunication.Data; }): Promise<Comunication.Response> {
        try {
            return this.prisma.user.update({ where, data })
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(where: Record<string, unknown>): Promise<Comunication.Response> {
        try {
            return this.prisma.user.delete({ where })
        } catch (error) {
            throw new Error(error)
        }
    }
}