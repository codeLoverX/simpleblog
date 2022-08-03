import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ManagerModule } from './manager/manager.module';
import { ElasticsearchModule , ElasticsearchService } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
   ManagerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
