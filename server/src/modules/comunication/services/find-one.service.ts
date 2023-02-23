import { Inject, Injectable } from "@nestjs/common";
import { IUser } from "src/modules/shared/interfaces/iuser";

@Injectable()
export class FindOneService {
    constructor(
        @Inject('User')
        private readonly user: IUser
    ) {}

    async execute(id: number) {
        return await this.user.findOne({ where: { id } })
    }
}