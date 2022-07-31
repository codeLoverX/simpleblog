import { Query, Resolver, Root } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Post } from './dtos';
import { ManagerService } from './manager.service';
import { AxiosResponse } from 'axios'
import axios from "axios";

@Resolver(() => Post)

export class ManagerResolver {

    constructor(private readonly managerService: ManagerService) {
    }
    @Query(() => [Post], { name: "post" })
    findAll() {
        return this.managerService.findAll()
    }
}

