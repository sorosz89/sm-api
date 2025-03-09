import { Test, TestingModule } from '@nestjs/testing';
import { JiraController } from './jira.controller';
import { JiraService } from './jira.service';

describe('JiraController', () => {
  let controller: JiraController;
  let service: JiraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JiraController],
      providers: [
        {
          provide: JiraService,
          useValue: {
            getIssue: jest.fn().mockResolvedValue({
              key: 'TEST-123',
              fields: { summary: 'Test issue' },
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<JiraController>(JiraController);
    service = module.get<JiraService>(JiraService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an issue', async () => {
    const issueId = 'TEST-123';
    const result = await controller.getIssue({ issueId });
    expect(result).toEqual({
      key: 'TEST-123',
      fields: { summary: 'Test issue' },
    });
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(service.getIssue).toHaveBeenCalledWith(issueId);
  });
});
