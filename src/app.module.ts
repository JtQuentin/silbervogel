/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AeroportModule } from './aeroport/aeroport.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AeroportModule, ConfigModule.forRoot() ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
