import { Octokit } from 'octokit';

const githubClient = (() => {
  const githubAuthToken = process.env.NEXT_GITHUB_AUTH_TOKEN;
  let instance: Octokit | undefined;

  function createInstance() {
    const octokit = new Octokit({
      auth: githubAuthToken,
    });

    return octokit;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
})();

export default githubClient;
