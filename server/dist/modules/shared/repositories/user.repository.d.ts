import { Logger } from "@nestjs/common";
import { PrismaHelper } from "../helpers/prisma.helper";
import { IUser } from "../interfaces/iuser";
export declare class UserRepository implements IUser {
    private prisma;
    protected logger: Logger;
    constructor(prisma: PrismaHelper);
    findOne({ where }: {
        where: Record<string, unknown>;
    }): Promise<Comunication.Response>;
    findAll({ skip, take, cursor, where, orderBy }: {
        skip?: number;
        take?: number;
        cursor?: {
            id: number;
        };
        where?: Record<string, unknown>;
        orderBy?: Record<string, unknown>;
    }): Promise<Comunication.Response[]>;
    create(data: Comunication.Data): Promise<Comunication.Response>;
    update({ where, data }: {
        where?: Record<string, unknown>;
        data: Comunication.Data;
    }): Promise<Comunication.Response>;
    delete(where: Record<string, unknown>): Promise<Comunication.Response>;
}
