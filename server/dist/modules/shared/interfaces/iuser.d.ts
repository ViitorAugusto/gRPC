export interface IUser {
    findOne(params?: {
        where: Record<string, unknown>;
    }): Promise<Comunication.Response | null>;
    findAll(params?: {
        skip?: number;
        take?: number;
        cursor?: {
            id: number;
        };
        where?: Record<string, unknown>;
        orderBy?: Record<string, unknown>;
    }): Promise<Comunication.Response[]>;
    create(data: Comunication.Data): Promise<Comunication.Response>;
    update(params: {
        where?: Record<string, unknown>;
        data: Comunication.Data;
    }): Promise<Comunication.Response>;
    delete(where: Record<string, unknown>): Promise<Comunication.Response>;
}
