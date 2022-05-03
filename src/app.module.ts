import { Modules } from './modules';
import { jobsModules } from './jobs';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { DBModule } from './config/db/db.module';

@Module({
  imports: [ScheduleModule.forRoot(), DBModule, ...jobsModules, ...Modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
