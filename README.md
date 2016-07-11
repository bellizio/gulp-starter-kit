[![Dependency Status](https://david-dm.org/bellizio/gulp-starter-kit.svg)](https://david-dm.org/bellizio/gulp-starter-kit)
[![devDependency Status](https://david-dm.org/bellizio/gulp-starter-kit/dev-status.svg)](https://david-dm.org/bellizio/gulp-starter-kit#info=devDependencies)

# Gulp Starter Kit

This is a gulp starter kit for front-end projects. The goal of this project is to provide a foundation for building front-end applications for both local development and production environments. It is built to be framework agnostic so that it can be easily expanded upon and integrated with any technology stack.

In order for the build process to be functional, at least a couple (necessary) assumptions need to be made: 1) a source directory structure with content exist and 2) Bower is used. While it could be argued that number 2 is not necessary, I do find (like many other developers) that the use of Bower makes front-end dependency management much less of a headache, especially on large scale applications.

With that said, I have created a simple directory structure with content under **app/source** and have also added a Bower dependency for demonstration purposes. This structure is what best suits my workflow, but feel free to modify it as you wish. Just keep in mind that changes to this structure will influence the build process.

## Getting Started

### Dependencies
* [Node](https://nodejs.org/)*
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

*I recommend installing node via [nvm](https://github.com/creationix/nvm). Node 4.3.0 or higher is required for this project.

### Setup
1. `git clone https://github.com/bellizio/gulp-starter-kit.git`
1. `cd gulp-starter-kit`
1. `npm install`

## Overview

### gulpfile.js
The **gulpfile.js** file is intended to act as a global file and is configured to read/sync all task files in the gulp folder. In an effort to avoid unnecessary duplication, each task module in the gulp folder is passed 4 parameters:

1. **gulp**
1. **$** - reference to [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)
1. **paths** - frequently used directories in gulp tasks
1. **env** - environment variables used for controlling the I/O of content in gulp tasks

### Gulp Folder
All gulp tasks are separated out into their respective files under the **gulp** folder. This modular approach allows for better maintainability and organization of the build process as the app matures.

### Tasks
There are a number of tasks defined and chained together, but the ones you will frequently use are:

* `gulp serve`
* `gulp build:dev`
* `gulp build:prod`
* `gulp serve:prod`
* `gulp clean`
* `gulp lint`

### Plugins
Rather than listing/detailing each plugin used in the project, please refer to the devDependencies field in the package.json file for a complete list. You can find up-to-date documentation on each plugin at [npmjs.com](https://www.npmjs.com/).

## Build Process

### Development
Run `gulp serve` to view and work with the application locally.

The `gulp serve` command will call the necessary tasks for building all application assets and moving files to a newly generated **app/dev** directory. Once all build-related tasks are complete, a local server will start running at **http://localhost:8000** and watch for changes made to any css or javascript file under the **app/source** path. When a change is saved, the browser will automatically reload.

### Production
Run `gulp build:prod` to build the application for production.

The `gulp build:prod` command will call the necessary tasks for building all application assets and moving files to a newly generated **app/prod** directory. You can optionally run `gulp serve:prod` to view the build locally at **http://localhost:8000**. There is no 'watch' task configured when `gulp serve:prod` is run. It is simply a way to verify that the production build works as expected prior to deployment to another environment.

## Contributing

See an issue or an opportunity to help make the app better?

After cloning the repo, feel free to reach out by creating a new [issue](https://github.com/bellizio/gulp-starter-kit/issues) or opening a [pull request](https://github.com/bellizio/gulp-starter-kit/pulls).
