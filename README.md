# git-tag-api
This repo is an API endpoint for getting the creation date of a git tag.

# Dev environment
 - Run `npm start` to have the endpoint running on `localhost:3000`
 - Copy `.env.sample` into `.env` and past your API key into the config file.

# API Endpoint
 - Send a GET request to `localhost:3000/tag`

# Build
This repo uses Github Actions to run the build and test the containerized environment.
It pulls the configuration from an s3 bucket during the build phase. 

# Not implemented
 - Advanced authentication. This solution only uses the personal access token.
 - Github Environments. There is one config file for all environments at the moment.
