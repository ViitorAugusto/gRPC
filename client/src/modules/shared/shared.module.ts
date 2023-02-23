import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { ComunicationGRPCProvider } from './providers/grpc/comunication.grpc.provider';


@Global()
@Module({
    imports: [ClientsModule.register([
        {
            name: 'COMUNICATION_PACKAGE',
            transport: Transport.GRPC,
            options: {
                url: 'localhost:50051',
                package: 'comunication',
                protoPath: resolve('./dist/protos/comunication.proto')
            }
        }
    ])],
    providers: [{
        provide: 'Comunication',
        useClass: ComunicationGRPCProvider
    }],
    exports: [{
        provide: 'Comunication',
        useClass: ComunicationGRPCProvider
    }]
})
export class SharedModule {}