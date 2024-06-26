/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Telegram as PrismaTelegram } from "@prisma/client";

export class TelegramServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TelegramCountArgs, "select">): Promise<number> {
    return this.prisma.telegram.count(args);
  }

  async telegrams(
    args: Prisma.TelegramFindManyArgs
  ): Promise<PrismaTelegram[]> {
    return this.prisma.telegram.findMany(args);
  }
  async telegram(
    args: Prisma.TelegramFindUniqueArgs
  ): Promise<PrismaTelegram | null> {
    return this.prisma.telegram.findUnique(args);
  }
  async createTelegram(
    args: Prisma.TelegramCreateArgs
  ): Promise<PrismaTelegram> {
    return this.prisma.telegram.create(args);
  }
  async updateTelegram(
    args: Prisma.TelegramUpdateArgs
  ): Promise<PrismaTelegram> {
    return this.prisma.telegram.update(args);
  }
  async deleteTelegram(
    args: Prisma.TelegramDeleteArgs
  ): Promise<PrismaTelegram> {
    return this.prisma.telegram.delete(args);
  }
}
