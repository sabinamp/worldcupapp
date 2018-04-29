# Important!:
## develop branch:
i created a `develop branch` with the latest status of the project including the firebase integration.

If we want we can make a branch for everybody so that we can merge the work to the `develop branch` once a new 'release' is ready to be delivered

## Resolve possible dependencies bugs when running `ionic serve`
run `npm install` for updating the dependencies list of the package.json file. I included a firebase peer dependency to temporary solve a bug of the last angularfire2 release *"angularfire2": "^5.0.0-rc.6.0"*"

# worldcupapp
App to display information about the WC 2018 using Ionic 3 framework


# Workspaces
Files on GoogleDrive: https://drive.google.com/drive/folders/1eBILXYUnRdUCgs0N1YnHGwue73Egp0d7

Prototype on Figma: https://www.figma.com/file/a6DSFtMu6z6JtEQdNicb2NPg/WorldCup2018


# Santiago notes

**JSON Database** uploaded into [this link](https://console.firebase.google.com/project/ws6c-87e23/database/ws6c-87e23/data)

`resources` things that are going to be different for Android and IOS
`src`where all the code is gonna go
`pages` pages of the app
`themes`for global variables
`assets` for storing images
`app`bootstrap folder of the entire app

from `pages folder` `ts files` are for dealing with user interaction
