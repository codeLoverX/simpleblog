import {
    Args, Query, Resolver, Int, Parent, ResolveField
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Comment, Post } from './dtos';
import { FetchUsersArgs } from './dtos/inputs';
import { ManagerService } from './manager.service';

@Resolver(() => Post)
export class ManagerResolver {

    constructor(private readonly managerService: ManagerService) {
    }
    @Query(() => [Post], { name: "posts" })
    findAllPosts(@Args({ nullable: true }) args: FetchUsersArgs) {
        return this.managerService.findAllPosts(args)
    }
    @Query(() => Post, { name: "post" })
    findPostById(@Args('post_id', { type: () => Int }) post_id: number) {
        return this.managerService.findPostById(post_id)
    }
    @ResolveField(() => [Comment], { name: "comments" })
    findCommentsByPostId(@Parent() post: Post, @Args({ nullable: true }) args: FetchUsersArgs) {
        return this.managerService.findCommentsByPostId(post.id, args)
    }
}

