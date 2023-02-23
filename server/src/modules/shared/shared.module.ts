import { Global, Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaHelper } from './helpers/prisma.helper';

@Global()
@Module({
    imports: [],
    providers: [
        PrismaHelper,
    {
        provide: 'User',
        useClass: UserRepository
    }],
    exports: [
        PrismaHelper,
    {
        provide: 'User',
        useClass: UserRepository
    }]
})
export class SharedModule {}
