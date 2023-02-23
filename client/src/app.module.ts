import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComunicationModule } from './modules/comunication/comunication.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [SharedModule, ComunicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
