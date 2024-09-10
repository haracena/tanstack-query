import { githubApi } from "../../api/github";
import { GithubIssue, State } from "../interfaces/Issue.interface";

export const getIssues = async (
  state: State,
  selectedLabels: string[]
): Promise<GithubIssue[]> => {
  const params = new URLSearchParams();

  if (state !== State.All) {
    params.append("state", state);
  }

  if (selectedLabels.length > 0) {
    params.append("labels", selectedLabels.join(","));
  }

  const { data } = await githubApi.get<GithubIssue[]>("/issues", { params });

  return data;
};
