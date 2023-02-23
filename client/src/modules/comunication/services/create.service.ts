import { Inject, Injectable } from '@nestjs/common';
import { IComunication } from 'src/modules/shared/interface/icomunication';

@Injectable()
export class CreateService {
    constructor(
        @Inject('Comunication')
        private readonly comunication: IComunication
    ){}

    execute(data: Comunication.Data) {
        return this.comunication.create(data)
    }
}
