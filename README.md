# Gulp Starter Kit

This is a gulp starter kit for front-end projects. The goal of this project is to provide a foundation for building front-end applications for both local development and production environments. It is built to be framework agnostic. This is so that it can be easily expanded upon and integrated with any technology stack.

In order for the build process to be functional, at least a couple (necessary) assumptions need to be made: 1) a source directory structure with content exist and 2) Bower is used. While it could be argued that number 2 is not necessary, I do find (like many other developers) that the use of Bower makes front-end dependency management much less of a headache, especially on large scale applications.

With that said, I have created a simple directory structure with content under **app/source** and have also added a Bower dependency. This is what best suits my workflow, but feel free to modify it as you wish. Just keep in mind that changes to this structure will influence the build process.

## Getting Started

### Dependencies
* [Node](https://nodejs.org/)*
* [Bower](http://bower.io/) - `npm install -g bower`
* [Gulp](http://gulpjs.com/) - `npm install -g gulp`

*I recommend installing node via [nvm](https://github.com/creationix/nvm). Please see the [support](https://github.com/bellizio/gulp-starter-kit/blob/master/README.md#support) section for more information regarding node compatibility.

### Setup
1. `git clone https://github.com/bellizio/gulp-starter-kit.git`
1. `cd gulp-starter-kit`
1.  `npm install`

## Overview

### gulpfile.js
The **gulpfile.js** file is intended to act as a global file and is configured to read/sync all task files in the gulp folder. In an effort to avoid unnecessary duplication, each task module in the gulp folder is passed three parameters:

1. **gulp**
1. **$** - reference to [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)
1. **paths** - frequently used directories in gulp tasks

### Gulp Folder
All gulp tasks are separated out into their respective files under the **gulp** folder. This modular approach allows for better maintainability and organization of the build process as the app matures.

### Tasks
There are a number of tasks defined and chained together, but the ones you will frequently use are:

* `gulp serve`
* `gulp build:dev`
* `gulp build:prod`
* `gulp serve:prod`
* `gulp clean`

### Plugins
Rather than listing/detailing each plugin used in the project, please refer to the devDependencies field in the package.json file for a complete list. You can find up-to-date documentation on each plugin at [npmjs.com](https://www.npmjs.com/).

## Build Process

### Development
Run `gulp serve` to view and work with the application locally.

The `gulp serve` command will call the necessary tasks for building all application assets and moving files to a newly generated **app/dev** directory. Once all build-related tasks are complete, a local server will start running at **http://localhost:8000** and watch for changes made to any css or javascript file under the **app/source** path. When a change is saved, the browser will automatically reload.

### Production
Run `gulp build:prod` to build the application for production.

The `gulp build:prod` command will call the necessary tasks for building all application assets and moving files to a newly generated **app/prod** directory. You can optionally run `gulp serve:prod` to view the build locally at **http://localhost:8000**. There is no 'watch' task configured when `gulp serve:prod` is run. It is simply a way to verify that the production build works as expected prior to deployment to another environment.

## Support

### Compatibility
This project has been tested with node versions 4.2.1 and 5.0.0. Though it is likely compatible with higher versions.

That said, any issue experienced with node versions < 4.2.1 is not supported. Furthermore, any modifications to the project in order to achieve compatibility with node versions < 4.2.1 is also not supported.

### Issues
After confirming that you have node 4.2.1 or higher installed, feel free to report any issues you experience and I will do my best to address them accordingly.
