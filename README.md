# Front-end boilerplate

Front-end boilerplate is a basic starter kit for gulp development.

## How to use it ?

Add this repo as a NPM dependencies with:

1. `npm install git://github.com/essomia/frontend-boilerplate.git` - to add this repo as your project dependency.
2. Set you project configuration with `gulpflow.json` at the same level as you `package.json` to set your project configuration.
3. Run `gulp build` to build entire project from sources to destination folder with your project configuration.


## Tasks

This is the full list of tasks, that I could use in a project. All available tasks are placed in the folder `./gulpflow/` as separate `*.js` files. Since we use the CommonJS modules format, usually, a `filename = task name`.

### Core tasks
Task name          | Description
:------------------|:----------------------------------
`assets`           | Compile only assets (images, fonts, json,...) to destination.
`build`            | Compile entire project (assets + styles + scripts) to destination.
`clean`            | Remove destination files of the project.
`watch`            | Watch sources files of project for modifications.

### Files tasks
Task name          | Description
:------------------|:----------------------------------
`css`              | Optimize `.css` with autoprefixer & cssnano.
`fonts`            | Copy `.eot/.svg/.ttf/.woff/.woff2`
`html`             | Optimize `.html` with htmlmin.
`images`           | Optimize `.jpg/.jpeg/.png/.gif/.svg` with imagemin.
`js`               | Optimize `.js` with uglify and include
`json`             | Optimize `.json` with jsonminify.
`scss`             | Compile `.sass/.scss` to `.css` with sass, autoprefixer & cssnano.


## Configuration

All default config are written in `./gulpflow/config.js`: conditional compilation, sources paths and tasks list.

If you need to configure your own workflow, add a `gulpflow.json` file at the same level as your `package.json`.
Then, you can customize your project configuration. Below you have an example of the `gulpflow.json` with its defaults values:

```
{
    "root": {
        "src": "./demo/src",
        "dest": "./demo/build"
    },
    "ifs": {
        "doSourcemaps": false,
        "doMinify": true
    },
    "sources": {
        "js":     "/components/**/js/**/*.js",
        "scss":   "/components/**/scss/**/*.{sass,scss}",
        "images": "/components/**/assets/images/**/*.{jpg,jpeg,png,gif,svg}",
        "fonts":  "/components/**/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}",
        "html":   "/components/**/assets/raw/**/*.html",
        "css":    "/components/**/assets/raw/**/*.css",
        "json":   "/components/**/assets/raw/**/*.json"
    },
    "tasks": {
        "watch": ["images", "fonts", "html", "json", "css", "scss", "js"],
        "assets":["images", "fonts", "html", "json", "css"],
        "build": ["images", "fonts", "html", "json", "css", "scss", "js"]
    }
}
```


### Default folders structure

The default sources folders structures is:

```
/demo/src
    /components
        /<component_name>
            /assets
                /fonts
                /images
                /raw
            /js
            /scss
```

And will compile files to destination:

```
/demo/build
    /<component_name>
        /assets
            /fonts
            /images
            /raw
        /js
        /scss
```


## Changes log
* 1.1.4
    * Fix: NPM dependencies warning
    * Fix: Error from autoprefixer for browsersList
    * Remove `gulp-cssnano` for `gulp-postcss` and `cssnano` for CSS minify
* 1.1.3
    * Fix: Keep watching partial files (ie. `**/_partial.ext`) but dont build them if not included in a main files (ie. `**/main.ext`)
    * Fix: Example for multiple components
    * Fix: Be sure to print final file path when tasks is finished
* 1.1.2
    * Fix: NPM dependencies warning
* 1.1.1
    * Fix: Correct input path for `watch` tasks
    * Fix: Adjust documentation of the `gulpflow.json`
    * Fix: Merged project configuration
* 1.1.0
    * Add merge configuration feature to custom your project configuration
    * Adjust tasks and configuration to be more customisable
* 1.0.0
    * Initial project with all basics tasks in `./gulpflow/*`
    * Add example of project folder structure in `./demo/src/` to be compiled into `./demo/build/`
