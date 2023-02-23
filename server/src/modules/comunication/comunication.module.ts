import { Module } from "@nestjs/common";
import { ComunicationController } from "./controller/comunication.controller";
import { FindOneService } from "./services/find-one.service";
import { CreateService } from "./services/create.service";

@Module({
    controllers: [ComunicationController],
    providers: [FindOneService, CreateService]
})
export class ComunicationModule {}