import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TelegramServiceBase } from "./base/telegram.service.base";

@Injectable()
export class TelegramService extends TelegramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
