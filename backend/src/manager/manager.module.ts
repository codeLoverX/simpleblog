import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ManagerResolver } from './manager.resolver';
import { ManagerService } from './manager.service';
@Module({
    imports: [HttpModule],
    providers: [ManagerResolver, ManagerService]
})
export class ManagerModule {
   

}

