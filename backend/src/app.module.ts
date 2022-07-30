import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppService } from './app.service';
import { ManagerModule } from './manager/manager.module';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver
    // })
  ManagerModule,
    SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


