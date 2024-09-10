import { githubApi } from "../../api/github";
import { GithubIssue } from "../interfaces/Issue.interface";

export const getIssue = async (issueNumber: number): Promise<GithubIssue> => {
  const { data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);

  return data;
};
