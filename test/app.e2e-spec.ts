import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { App } from "supertest/types";
import { JiraModule } from "./../src/jira/jira.module";

describe("JiraController (e2e)", () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [JiraModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/jira/ (GET)", () => {
    return request(app.getHttpServer()).get("/jira/").expect(200).expect("OK");
  });
});
