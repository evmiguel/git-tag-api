# git-tag-api
This repo is an API endpoint for getting the creation date of a git tag.

# Dev environment (non-Dockerized)
 - Copy `.env.sample` into `.env` and past your API key into the config file.
 - Run `npm run --workspace=api start` in one terminal
    - The endpoint will be running on `localhost:3000/tag/:tagId`
 - Run `npm run --workspace=app start` in another terminal to start the webapp

# API Endpoint
 - Send a GET request to `/tag/:tagId`

# Build
This repo uses Github Actions to run the build and test the containerized environment.
It pulls the configuration from an s3 bucket during the build phase. 

# Infrastructure
The infrastructure for this app is hosted on my personal AWS account
with resources also in GoDaddy.

# Deployment
- Run `ansible-playbook -i hosts.yml provision.yml --ask-become-pass`

# Not implemented
 - Advanced authentication. This solution only uses the personal access token.
 - Github Environments. There is one config file for all environments at the moment.
