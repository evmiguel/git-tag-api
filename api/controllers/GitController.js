const { Octokit } = require('@octokit/rest');

async function getCreationDateByReleaseTag(req, res) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_API_KEY
      })
      
      let response = null;
      try  {
        response = await octokit.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
            owner: 'blockapps',
            repo: 'strato-getting-started',
            tag: req.params.tag,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })

        const createdAt = response.data.created_at;

        res.send({created_at: createdAt});
      } catch (error) {
        res.sendStatus(error.status);
      }
}

module.exports = { getCreationDateByReleaseTag };