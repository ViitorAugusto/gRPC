import { Module } from "@nestjs/common";
import { FindOneService } from "./services/find-one.service";
import { ComunicationController } from "./controllers/comunication.controller";
import { CreateService } from "./services/create.service";

@Module({
    controllers: [ComunicationController],
    providers: [FindOneService, CreateService]
})
export class ComunicationModule {}