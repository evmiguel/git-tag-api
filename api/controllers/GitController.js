const { Octokit } = require('@octokit/rest');

async function getCreationDateByReleaseTag(req, res) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_API_KEY
      })
      
      try  {

        const tagResponse = await octokit.request('GET /repos/{owner}/{repo}/git/ref/tags/{tag}', {
            owner: 'blockapps',
            repo: 'strato-getting-started',
            tag: req.params.tag,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })

        const followUrl = tagResponse.data.object.url;
        
        const followResponse = await octokit.request(followUrl, {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }); 

        const createdAt = followResponse.data.author.date;
        
        res.send({ created_at: createdAt});
      } catch (error) {
        res.sendStatus(error.status);
      }
}

module.exports = { getCreationDateByReleaseTag };