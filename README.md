# git-tag-api
This repo is an API endpoint for getting the creation date of a git tag.
The API utilizes the GitHub API to find the creation date by looking
for the tag and getting the date associated with the author.
Visit https://tag.erikamiguel.com to try out the application.

# Dev environment (non-Dockerized)
 - Copy `.env.sample` into `.env` and past your API key into the config file.
 - Run `npm run --workspace=api start` in one terminal
    - The endpoint will be running on `http://localhost:3000/tag/:tagId`
 - Run `npm run --workspace=app start` in another terminal to start the webapp

# API Endpoint
 - Send a GET request to `https://tag.erikamiguel.com/tag/:tagId`

# Build
This repo uses Github Actions to run the build and test the containerized environment.
It pulls the configuration from an s3 bucket during the build phase. 

# Infrastructure
The infrastructure for this app is hosted on my personal AWS account
with resources also in GoDaddy.

# Deployment
- Go into the ansible folder: `cd infrastructure/ansible`
- Run `ansible-playbook -i hosts.yml provision.yml --ask-become-pass`

# Not implemented
 - HTTPS
 - Fancy UI and mobile screen.
 - Advanced authentication. This solution only uses the personal access token.
 - Github Environments. There is one config file for all environments at the moment.
