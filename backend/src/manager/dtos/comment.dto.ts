import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
    IsString, IsNumber, IsEmail
} from 'class-validator';

@ObjectType()
export class Comment {
    @IsNumber()
    // @IsNotEmpty()
    @Field(type => Int)
    postId: number

    @IsNumber()
    // @IsNotEmpty()
    @Field(type => Int)
    id: number

    @Field()
    @IsString()
    // @IsNotEmpty()
    name: string

    @Field()
    @IsString()
    // @IsNotEmpty()
    @IsEmail()
    email: string

    @Field()
    @IsString()
    // @IsNotEmpty()
    body: string



}