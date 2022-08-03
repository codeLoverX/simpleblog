import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
    IsString, IsNumber, IsNotEmpty, IsArray
} from 'class-validator';
import { Comment } from './comment.dto';

@ObjectType()
export class Post {
    @IsNumber()
    @IsNotEmpty()
    @Field(type => Int)
    userId: number

    @Field(type => Int)
    @IsNumber()
    @IsNotEmpty()
    id: number

    @Field()
    @IsString()
    @IsNotEmpty()
    title: string

    @Field()
    @IsString()
    @IsNotEmpty()
    body: string


    @Field(() => [Comment], { nullable: false })
    @IsArray()
    comments: [Comment]
}

