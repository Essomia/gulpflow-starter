# Front-end boilerplate

Front-end boilerplate is a basic starter kit for gulp development.

## How to use it ?

Clone this repo and then in command line type:

`npm install` - Install all dependencies
`gulp build`  - Build entire project from sources


## Tasks
This is a full list of tasks, that we use in our projects. All available tasks are placed in a folder `./gulpflow/` as separate `*.js` files. Since we use the CommonJS modules format, usually, `filename = task name`.

### Core tasks
Task name          | Description
:------------------|:----------------------------------
`build`            | Compile entire project (assets + styles + scripts) to destination.
`assets`           | Compile only assets (images, fonts, json,...) to destination.
`watch`            | Watch sources files of project for modifications.
`clean`            | Remove destination files of the project.

### Files tasks
Task name          | Description
:------------------|:----------------------------------
`scss`             | Compile `.sass/.scss` to `.css` with sass, autoprefixer & cssnano.
`js`               | Optimize `.js` with uglify and include
`images`           | Optimize `.jpg/.jpeg/.png/.gif/.svg` with imagemin.
`fonts`            | Copy `.eot/.svg/.ttf/.woff/.woff2`
`json`             | Optimize `.json` with jsonminify.
`css`              | Optimize `.css` with autoprefixer & cssnano.
`html`             | Optimize `.html` with htmlmin.


## Configuration

All Gulp config are written in `./gulpflow/config.js`

Conditional compilation and tasks list can be configured in the end of `./gulpflow/config.js`.


## Notable changes:

* 1.0.0
    * Initial project with all basics tasks in `./gulpflow/*`
