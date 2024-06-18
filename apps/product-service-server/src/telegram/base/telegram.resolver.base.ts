/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Telegram } from "./Telegram";
import { TelegramCountArgs } from "./TelegramCountArgs";
import { TelegramFindManyArgs } from "./TelegramFindManyArgs";
import { TelegramFindUniqueArgs } from "./TelegramFindUniqueArgs";
import { CreateTelegramArgs } from "./CreateTelegramArgs";
import { UpdateTelegramArgs } from "./UpdateTelegramArgs";
import { DeleteTelegramArgs } from "./DeleteTelegramArgs";
import { TelegramService } from "../telegram.service";
@graphql.Resolver(() => Telegram)
export class TelegramResolverBase {
  constructor(protected readonly service: TelegramService) {}

  async _telegramsMeta(
    @graphql.Args() args: TelegramCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Telegram])
  async telegrams(
    @graphql.Args() args: TelegramFindManyArgs
  ): Promise<Telegram[]> {
    return this.service.telegrams(args);
  }

  @graphql.Query(() => Telegram, { nullable: true })
  async telegram(
    @graphql.Args() args: TelegramFindUniqueArgs
  ): Promise<Telegram | null> {
    const result = await this.service.telegram(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Telegram)
  async createTelegram(
    @graphql.Args() args: CreateTelegramArgs
  ): Promise<Telegram> {
    return await this.service.createTelegram({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Telegram)
  async updateTelegram(
    @graphql.Args() args: UpdateTelegramArgs
  ): Promise<Telegram | null> {
    try {
      return await this.service.updateTelegram({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Telegram)
  async deleteTelegram(
    @graphql.Args() args: DeleteTelegramArgs
  ): Promise<Telegram | null> {
    try {
      return await this.service.deleteTelegram(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
