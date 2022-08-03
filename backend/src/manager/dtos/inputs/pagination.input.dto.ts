
import { Field, Int, ArgsType, InputType } from '@nestjs/graphql'
import { Max, Min, IsOptional } from 'class-validator'

@ArgsType()
export class PaginateArgs {
  @Field({ nullable: false, defaultValue: 0 })
  @Min(0)
  @IsOptional()
  skip: number

  @Field({ nullable: false, defaultValue: 2 })
  @Min(1)
  @Max(50)
  take: number
}