import { IUser } from "src/modules/shared/interfaces/iuser";
export declare class CreateService {
    private readonly user;
    constructor(user: IUser);
    execute(data: Comunication.Data): Promise<Comunication.Response>;
}
