import {
    Args, Query, Resolver, Int, Parent, ResolveField
} from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Comment, Post } from './dtos';
import { PaginateArgs } from './dtos/inputs';
import { ManagerService } from './manager.service';

@Resolver(() => Post)
export class ManagerResolver {

    constructor(private readonly managerService: ManagerService) {
    }
    @Query(() => [Post], { name: "posts" })
    findAllPosts(@Args({ nullable: true }) args: PaginateArgs) {
        return this.managerService.findAllPosts(args)
    }
    @Query(() => Post, { name: "post" })
    findPostById(@Args('post_id', { type: () => Int }) post_id: number) {
        return this.managerService.findPostById(post_id)
    }
    @Query(() => [Comment], { name: "comments" })
    findCommentsBySearch(
        @Args({ name: 'searchString', type: () => String }) searchString: string,
        @Args({ name: 'filterKey', type: () => String }) filterKey: string) {
        return this.managerService.findCommentsBySearch(searchString, filterKey)
    }
    @ResolveField(() => [Comment], { name: "comments" })
    findCommentsByPostId(@Parent() post: Post, @Args({ nullable: true }) args: PaginateArgs) {
        return this.managerService.findCommentsByPostId(post.id, args)
    }
}

