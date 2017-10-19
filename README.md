# Email App #
Fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.

## Huroku Deployment Checklist ##

### 1. Dynamic Port Binding ###
Heroku tells us which port our app will use, so we need to make sure we listen to the port they tell us to
### 2. Specify Node Environment ###
We want to use a specific version of node, so we need to tell Heroku which version we want
### 3. Specify start script ###
Instruct Heroku what command to run to start our server running
### 4. Create .gitignore file ###
We don't want to include dependencies, Heroku will do that for us
