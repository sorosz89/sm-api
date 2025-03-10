/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from "@nestjs/core";
import { JiraModule } from "./jira/jira.module";

async function bootstrap() {
  const app = await NestFactory.create(JiraModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
