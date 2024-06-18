import { Module } from "@nestjs/common";
import { TelegramModuleBase } from "./base/telegram.module.base";
import { TelegramService } from "./telegram.service";
import { TelegramController } from "./telegram.controller";
import { TelegramResolver } from "./telegram.resolver";

@Module({
  imports: [TelegramModuleBase],
  controllers: [TelegramController],
  providers: [TelegramService, TelegramResolver],
  exports: [TelegramService],
})
export class TelegramModule {}
