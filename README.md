# Front-end boilerplate

Front-end boilerplate is a basic starter kit for gulp development.

## How to use it ?

Add this repo as a NPM dependencies with:

1. `npm install git://github.com/essomia/frontend-boilerplate.git` - to add this repo as your project dependency.
2. Set you project configuration with `gulpflow.json` at the same level as you `package.json` to set your project configuration.
3. Run `gulp build` to build entire project from sources to destination folder with your project configuration.


## Tasks

This is the full list of tasks, that we use in our projects. All available tasks are placed in the folder `./gulpflow/` as separate `*.js` files. Since we use the CommonJS modules format, usually, a `filename = task name`.

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
Then, you can customize your project configuration. As an exmple, below, you have an example of the `gulpflow.json` with its defaults values:

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
        "js": [
            "/components/**/js/**/[^_]*.js"
        ],
        "scss": [
            "/components/**/scss/**/[^_]*.{sass,scss}"
        ],
        "css": [
            "/components/**/assets/raw/**/[^_]*.css"
        ],
        "fonts": [
            "/components/**/assets/fonts/**/[^_]*.{eot,svg,ttf,woff,woff2}"
        ],
        "html": [
            "/components/**/assets/raw/**/[^_]*.html"
        ],
        "images": [
            "/components/**/assets/images/**/[^_]*.{jpg,jpeg,png,gif,svg}"
        ],
        "json": [
            "/components/**/assets/raw/**/[^_]*.json"
        ]
    },

    "tasks": {
        "watch": ["images", "fonts", "html", "json", "css", "scss", "js"],
        "assets":["images", "fonts", "html", "json", "css"],
        "prod":  ["images", "fonts", "html", "json", "css", "scss", "js"]
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


## Dependencies

Thanks to all the amazing authors of theses packages:
- [del](http://www.npmjs.com/package/del) - Delete files and folders using globs
- [fancy-log](http://www.npmjs.com/package/fancy-log) - Log things, prefixed with a timestamp
- [gulp](http://www.npmjs.com/package/gulp) - Toolkit to automate your development workflow
- [gulp-autoprefixer](http://www.npmjs.com/package/gulp-autoprefixer) - Prefix CSS with autoprefixer
- [gulp-concat](http://www.npmjs.com/package/gulp-concat) - Concat files into one
- [gulp-cssnano](http://www.npmjs.com/package/gulp-cssnano) - Minify CSS with cssnano
- [gulp-htmlmin](http://www.npmjs.com/package/gulp-htmlmin) - Minify HTML
- [gulp-if](http://www.npmjs.com/package/gulp-if) - A ternary gulp plugin: conditionally control the flow of vinyl objects
- [gulp-imagemin](http://www.npmjs.com/package/gulp-imagemin) - Minify PNG, JPEG, GIF and SVG images with imagemin
- [gulp-include](http://www.npmjs.com/package/gulp-include) - Other file insertion compilation tools
- [gulp-jsonminify](http://www.npmjs.com/package/gulp-jsonminify) - Minifies blocks of JSON
- [gulp-load-plugins](http://www.npmjs.com/package/gulp-load-plugins) - Loads gulp plugins from package dependencies
- [gulp-load-subtasks](http://www.npmjs.com/package/gulp-load-subtasks) - Ability to import sets of related tasks
- [gulp-plumber](http://www.npmjs.com/package/gulp-plumber) - Prevent pipe breaking caused by errors from gulp plugins
- [gulp-rename](http://www.npmjs.com/package/gulp-rename) - Plugin to rename files easily
- [gulp-sass](http://www.npmjs.com/package/gulp-sass) - Plugin to compile sass files
- [gulp-sourcemaps](http://www.npmjs.com/package/gulp-sourcemaps) - Allow you to see the original source instead of the compiled while debugging
- [gulp-uglify](http://www.npmjs.com/package/gulp-uglify) - Minify JavaScript with UglifyJS3
- [merge-objects](http://www.npmjs.com/package/merge-objects) - Merge two objects and concatenate arrays that are values of the same object key


## Changes log
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
