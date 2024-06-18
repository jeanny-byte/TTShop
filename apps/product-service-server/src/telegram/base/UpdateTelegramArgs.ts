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
import { TelegramWhereUniqueInput } from "./TelegramWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TelegramUpdateInput } from "./TelegramUpdateInput";

@ArgsType()
class UpdateTelegramArgs {
  @ApiProperty({
    required: true,
    type: () => TelegramWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TelegramWhereUniqueInput)
  @Field(() => TelegramWhereUniqueInput, { nullable: false })
  where!: TelegramWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TelegramUpdateInput,
  })
  @ValidateNested()
  @Type(() => TelegramUpdateInput)
  @Field(() => TelegramUpdateInput, { nullable: false })
  data!: TelegramUpdateInput;
}

export { UpdateTelegramArgs as UpdateTelegramArgs };