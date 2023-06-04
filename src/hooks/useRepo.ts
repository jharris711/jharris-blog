import { useEffect, useState } from 'react';
import githubClient from '@/services/githubClient';
import { OctokitResponse } from '@octokit/types';

const useRepo = (repoName: string) => {
  const [repo, setRepo] = useState<OctokitResponse<any, 200>['data']>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<unknown>(null);

  useEffect(() => {
    try {
      setIsLoading(true);

      const gh = githubClient.getInstance();

      const getRepos = async () => {
        const result = await gh.request('GET /repos/{owner}/{repo}', {
          owner: 'jharris711',
          repo: repoName,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });
        setRepo(result.data);
      };

      getRepos();
    } catch (e) {
      setIsError(e);
    } finally {
      setIsLoading(false);
    }
  }, [repoName]);

  return { repo, isLoading };
};

export default useRepo;
