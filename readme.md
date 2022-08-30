# Adding codePush
go to https://appcenter.ms/ create and account and organization.
After that create an App and go to Distribute CodePush (on left drawer)
Click on start deployment and copy the commands for deploying the changes to microsoft appcenter.

NOTE: there were a few things in order to achieve this. First installing dependencies with `npm install` Second changing configurations in ios directory,   
Like AppDelegate.m and Info.plist 

install globally `npm install -g appcenter-cli`

1. `appcenter login`
2. `appcenter codepush release-react -a <ORGANIZATION_NAME>/<APP_NAME> -d Staging` (staging/production)
