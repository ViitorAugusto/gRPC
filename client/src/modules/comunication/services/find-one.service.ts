import { Inject, Injectable } from '@nestjs/common';
import { IComunication } from 'src/modules/shared/interface/icomunication';

@Injectable()
export class FindOneService {
    constructor(
        @Inject('Comunication')
        private readonly comunication: IComunication
    ){}

    execute(id: number) {
        return this.comunication.findOne(id)
    }
}
