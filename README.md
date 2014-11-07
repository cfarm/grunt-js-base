grunt-js-base
=============

Basic starter files for a project using Grunt.js. This repo was created as sample code for my article [Automate Recurring Tasks with Grunt.js on Sitepoint.com](www.sitepoint.com/automate-recurring-tasks-grunt/).

## What's in it?

This project includes the following Grunt plugins that I find most useful for a front end development workflow:

* [grunt-contrib-watch](https://www.npmjs.org/package/grunt-contrib-watch) to watch for file changes and automatically refresh pages with changes
* [grunt-contrib-uglify](https://www.npmjs.org/package/grunt-contrib-uglify) to concatenate and minify JavaScript files
* [grunt-contrib-sass](https://www.npmjs.org/package/grunt-contrib-sass) to compile Sass files
* [matchdep](https://www.npmjs.org/package/matchdep) to more easily install new Grunt plugins without having to manually load the task in your Gruntfile (see [Automatically Loading Tasks with matchdep](http://bdadam.com/blog/automatically-loading-grunt-tasks-with-matchdep.html))

## How do I use this?

Fork this repo and clone it to your machine to try it out. You'll need to [install Node.js](http://nodejs.org/) first. Then run the following command from your project folder:

`npm install`

This will install all the plugins for this project. Once that's done you can run the default Grunt command:

`grunt`

 You should get the compiled version of the index page once you've refreshed it in your browser.
