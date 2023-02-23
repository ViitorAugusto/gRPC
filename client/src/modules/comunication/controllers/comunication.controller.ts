import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common/decorators";
import { ComunicationCreateDTO } from "../dtos/comunication-create.dto";
import { FindOneService } from "../services/find-one.service";
import { CreateService } from "../services/create.service";
import { ComunicationFindOneDTO } from "../dtos/comunication-findone.dto";


@Controller('comunication')
export class ComunicationController {
    constructor(
        private readonly createService: CreateService,
        private readonly findOneService: FindOneService
    ) {}
    
    @HttpCode(201)
    @Post()
    create(@Body() data: ComunicationCreateDTO): Comunication.Response {
        return this.createService.execute(data)
    }

    @HttpCode(200)
    @Get('/:id')
    findOne(@Param() { id }: ComunicationFindOneDTO): Comunication.Response {
        return this.findOneService.execute(Number(id))
    }
}
