import { Controller, Get, Param } from "@nestjs/common";
import { JiraService } from "./jira.service";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Controller("jira")
export class JiraController {
  constructor(private readonly jiraService: JiraService) {}

  /**
   * Retrieves the health of the Jira service.
   * @returns A string indicating the health of the Jira service.
   */
  @Get()
  getHealth(): string {
    return this.jiraService.getHealth();
  }

  /**
   * Retrieves a Jira issue by its ID.
   * @param params - The route parameters containing the issue ID.
   * @returns A promise that resolves to the Jira issue data.
   */
  @Get(":issueId")
  getIssue(
    @Param() params: { issueId: string },
  ): Promise<Observable<AxiosResponse<any, any>>> {
    return this.jiraService.getIssue(params.issueId);
  }
}
