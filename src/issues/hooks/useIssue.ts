import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/get-issue.action";
import { getIssueComments } from "../actions/get-issue-comments.action";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60,
  });

  // const commentsQuery = useQuery({
  //   queryKey: ["issueComments", issueNumber, "comments"],
  //   queryFn: () => getIssueComments(issueNumber),
  //   staleTime: 1000 * 60,
  // });

  const commentsQuery = useQuery({
    queryKey: ["issueComments", issueQuery.data?.number, "comments"],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    staleTime: 1000 * 60,
    enabled: !!issueQuery.data,
  });

  return { issueQuery, commentsQuery };
};
