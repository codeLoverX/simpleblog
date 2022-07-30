import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { FetchService } from './fetch/fetch.service';

@Module({
  providers: [LoggerService, FetchService]
})
export class SharedModule {}
