import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreatePost{

    @IsNumber()
    @IsNotEmpty()
    @Field(type => Int)
    postId: number
    
    @IsNumber()
    @IsNotEmpty()
    @Field(type => Int)
    id: number

    @Field()
    @IsString()
    @IsNotEmpty()
    name: string
    
    @Field()
    @IsString()
    @IsNotEmpty()
    email: string
    
    @Field()
    @IsString()
    @IsNotEmpty()
    body: string
}

