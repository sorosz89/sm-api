import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { JiraController } from "./jira.controller";
import { JiraService } from "./jira.service";
import { getAuthorization, getEnvConfig } from "./utils/jira-config";

// Configuration for the HttpModule, including the base URL and authorization headers
const httpConfig = {
  baseURL: getEnvConfig("JIRA_BASE_URL"),
  headers: {
    Authorization: getAuthorization(),
  },
};

@Module({
  imports: [
    // Register the HttpModule with the custom configuration - Axios instance
    HttpModule.register(httpConfig),
  ],
  controllers: [JiraController],
  providers: [JiraService],
})
export class JiraModule {}
