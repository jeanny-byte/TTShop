import * as graphql from "@nestjs/graphql";
import { TelegramResolverBase } from "./base/telegram.resolver.base";
import { Telegram } from "./base/Telegram";
import { TelegramService } from "./telegram.service";

@graphql.Resolver(() => Telegram)
export class TelegramResolver extends TelegramResolverBase {
  constructor(protected readonly service: TelegramService) {
    super(service);
  }
}
