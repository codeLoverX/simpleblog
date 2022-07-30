import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreateComment{
    
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
}