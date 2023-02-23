import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { CreateService } from "../services/create.service";
import { ComunicationFindOneDTO } from "../dtos/comunication-findone.dto";
import { FindOneService } from "../services/find-one.service";
import { ComunicationCreateDTO } from "../dtos/comunication-create.dto";

@Controller()
export class ComunicationController {
    constructor(
        private readonly createService: CreateService,
        private readonly findOneService: FindOneService
    ) {}
    
    @GrpcMethod('ComunicationService', 'create')
    async create(data: ComunicationCreateDTO) {
        return await this.createService.execute(data)
    }

    @GrpcMethod('ComunicationService', 'findOne')
    async findOne({ id }: ComunicationFindOneDTO) {
        return await this.findOneService.execute(id)
    }
}