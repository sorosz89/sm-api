import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class JiraService {
  constructor(private readonly httpService: HttpService) {}

  /**
   * Retrieves the health of the Jira service.
   * @returns A string indicating the health of the Jira service.
   */
  getHealth(): string {
    return "OK";
  }

  /**
   * Retrieves a Jira issue by its ID.
   * @param issueId - The ID of the Jira issue to retrieve.
   * @returns A promise that resolves to the Jira issue data.
   */
  async getIssue(issueId: string): Promise<any> {
    const URL = `/issue/${issueId}`;

    const { data } = await firstValueFrom(
      this.httpService.get<{ data: any }>(URL).pipe(
        catchError((error: AxiosError) => {
          // Handle the error and rethrow it
          throw error;
        }),
      ),
    );
    return data;
  }
}
