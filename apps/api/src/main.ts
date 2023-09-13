import prisma from "@libs/prisma";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  await prisma.$connect().catch((error) => {
    Logger.error(error);
    process.exit(1);
  });

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
