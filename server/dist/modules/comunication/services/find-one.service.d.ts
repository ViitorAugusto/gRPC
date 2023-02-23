import { IUser } from "src/modules/shared/interfaces/iuser";
export declare class FindOneService {
    private readonly user;
    constructor(user: IUser);
    execute(id: number): Promise<Comunication.Response>;
}
