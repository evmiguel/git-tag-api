# git-tag-api
This repo is an API endpoint for getting the creation date of a git tag.
The API utilizes the GitHub API to find the creation date by looking
for the tag and getting the date associated with the author.
Visit https://tag.erikamiguel.com to try out the application.

# Dev environment (non-Dockerized)
 - Copy `.env.sample` into `.env` and past your API key into the config file.
   You can generate an access token in https://github.com/settings/tokens, under Fine-grained tokens
 - Install each workspace dependencies by running `npm install`
 - Run `npm run --workspace=api start` in one terminal
    - The endpoint will be running on `http://localhost:3000/tag/:tagId`
 - Run `npm run --workspace=app start` in another terminal to start the webapp
    - The local webapp will be on `http://localhost:4000` 

# API Endpoint
 - Send a GET request to `https://tag.erikamiguel.com/tag/:tagId`
 - A successful response will have a 200 status code and the response format will be JSON in the below form, where the date is in ISO 8601 format:
 ```
 {"created_at":"2021-12-16T16:08:26Z"}
 ```
   - An unsuccessful response will return a 404 response code and **Not Found** in the HTML body


# Build
This repo uses Github Actions to run the build and test the containerized environment.
It pulls the configuration from an s3 bucket during the build phase. 

# Infrastructure
 - The infrastructure for this app is hosted on my personal AWS account
   with resources also in GoDaddy.

 - Unless you are the owner of this repo, you will not have access to
   the necessary keys and secrets required to run Terraform and Ansible. 

 - ## Deployment
   - Go into the ansible folder: `cd infrastructure/ansible`
   - Run `ansible-playbook -i hosts.yml provision.yml --ask-become-pass`

# Not implemented
 - Fancy UI and mobile screen.
 - Modifiable owner and repo in API. This API is strictly for browsing the https://github.com/blockapps/strato-getting-started repo
 - Advanced authentication. This solution only uses the personal access token.
 - Github Environments. There is one config file for all environments at the moment.
