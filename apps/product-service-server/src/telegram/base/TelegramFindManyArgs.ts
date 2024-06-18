/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TelegramWhereInput } from "./TelegramWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TelegramOrderByInput } from "./TelegramOrderByInput";

@ArgsType()
class TelegramFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TelegramWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TelegramWhereInput, { nullable: true })
  @Type(() => TelegramWhereInput)
  where?: TelegramWhereInput;

  @ApiProperty({
    required: false,
    type: [TelegramOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TelegramOrderByInput], { nullable: true })
  @Type(() => TelegramOrderByInput)
  orderBy?: Array<TelegramOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TelegramFindManyArgs as TelegramFindManyArgs };
