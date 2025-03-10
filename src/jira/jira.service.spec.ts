import { Test, TestingModule } from "@nestjs/testing";
import { JiraService } from "./jira.service";
// import { JiraModule } from './jira.module';
import { HttpModule } from "@nestjs/axios";

describe("JiraService", () => {
  let service: JiraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [JiraService],
    }).compile();

    service = module.get<JiraService>(JiraService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
