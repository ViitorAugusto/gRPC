"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            url: '0.0.0.0:50051',
            package: 'comunication',
            protoPath: (0, path_1.join)(__dirname + '/protos/comunication.proto'),
            keepCase: true,
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map