import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TelegramService } from "./telegram.service";
import { TelegramControllerBase } from "./base/telegram.controller.base";

@swagger.ApiTags("telegrams")
@common.Controller("telegrams")
export class TelegramController extends TelegramControllerBase {
  constructor(protected readonly service: TelegramService) {
    super(service);
  }
}
