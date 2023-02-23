import { CreateService } from "../services/create.service";
import { ComunicationFindOneDTO } from "../dtos/comunication-findone.dto";
import { FindOneService } from "../services/find-one.service";
import { ComunicationCreateDTO } from "../dtos/comunication-create.dto";
export declare class ComunicationController {
    private readonly createService;
    private readonly findOneService;
    constructor(createService: CreateService, findOneService: FindOneService);
    create(data: ComunicationCreateDTO): Promise<Comunication.Response>;
    findOne({ id }: ComunicationFindOneDTO): Promise<Comunication.Response>;
}
