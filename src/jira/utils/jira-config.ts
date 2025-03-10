import { config } from "dotenv";
config();

export const getAuthorization = () => {
  return `Bearer ${process.env.JIRA_PERSONAL_ACCESS_TOKEN}`;
};

export const getEnvConfig = (envVariable: string): string => {
  return process.env?.[envVariable] as string;
};
