"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaHelper = void 0;
const client_1 = require("@prisma/client");
class PrismaHelper extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
}
exports.PrismaHelper = PrismaHelper;
//# sourceMappingURL=prisma.helper.js.map