import {
    Args, Query, Resolver, ResolveProperty,  Int, Parent
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Comment, Post } from './dtos';
import { ManagerService } from './manager.service';

@Resolver(() => Post)
export class ManagerResolver {

    constructor(private readonly managerService: ManagerService) {
    }
    @Query(() => [Post], { name: "posts" })
    findAllPosts() {
        return this.managerService.findAllPosts()
    }
    @Query(() => Post, { name: "post" })
    findPostById(@Args('post_id', { type: () => Int }) post_id: number) {
        return this.managerService.findPostById(post_id)
    }
    @ResolveProperty(() => [Comment], { name: "comments" })
    findCommentsByPostId(@Parent() post: Post) {
        return this.managerService.findCommentsByPostId(post.id)
    }
}

