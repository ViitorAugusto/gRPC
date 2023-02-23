import { Inject, Injectable } from "@nestjs/common";
import { IUser } from "src/modules/shared/interfaces/iuser";

@Injectable()
export class CreateService {
    constructor(
        @Inject('User')
        private readonly user: IUser
    ) {}

    async execute(data: Comunication.Data) {
        return this.user.create(data)
    }
}