import { Inject, Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { IComunication } from "../../interface/icomunication";
import { ClientGrpc } from "@nestjs/microservices";

@Injectable()
export class ComunicationGRPCProvider implements IComunication, OnModuleInit {
    protected logger = new Logger(ComunicationGRPCProvider.name)
    protected comunicationProvider
    
    constructor(
        @Inject('COMUNICATION_PACKAGE')
        private client: ClientGrpc
    ){}

    onModuleInit() {
        this.comunicationProvider = this.client.getService('ComunicationService')
    }

    findOne(id: number): Comunication.Response  {
       try {
        return this.comunicationProvider.findOne({ id })
       } catch (error) {
        this.logger.error(this.findOne.name, error)
       }
    }
    
    create(data: Comunication.Data): Comunication.Response {
        try {
            return this.comunicationProvider.create(data)
        } catch (error) {
            this.logger.error(this.create.name, error)
        }
    }

}