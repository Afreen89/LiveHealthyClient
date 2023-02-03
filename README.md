## Live Healthy Web Client 

### Introduction 

A simple web client for the Live Healthy app. 

### Setup Up 

1) Clone this repository,
2) The project is on VueJS. 
3) GitHub actions are in *.github/workflows/azure-static-web-apps-thankful-grass-0f213b90f.yml* which allows automatic deployment of the web app whenever a commit is pushed (or a PR is merged in main branch).


```bash
$ git clone -b second-subscription https://github.com/Afreen89/LiveHealthyClient.git
$ cd LiveHealthyClient 
$ npm run serve 
```

Open localhost on 8080 port and see the hot-reloaded changaes on your local machine. Once you are happy with the changes, git commit the changes in the root directory and push them as follow: 


```bash
$ cd /path/to/project/root/
$ git add .
$ git commit -m "<type commit message here>"
$ git push
```

### App Live Link

The static web app is live on the follwoing link: 

```bash
https://happy-wave-00ad37d03.1.azurestaticapps.net/
```

### GitHub Actions 

Once you push a new commit (to second-subscription branch), go to the Actions to see the automatic deployment status. If the last deployment is green, it means the changes are live. If it is red, there is some error. If it is orange moving circle, please wait as the deployment is in process. 


Usually, test cases are written before automatic deployment. However, I have avoided it for this assignment.

### Software Demonstration
[Here](https://www.youtube.com/watch?v=NXDpA51fvNY) is the video of software developed in this assignment. 
