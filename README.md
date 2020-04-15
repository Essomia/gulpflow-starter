# Front-end boilerplate

Front-end boilerplate is a basic starter kit for gulp development that use scss, babel, linter and images optimisations.

## Installation

### Dependencies

Make sure these are installed first.

- Node.Js
- Gulp Command Line Utility

```
brew install node
npm install -g gulp-cli
```

### How to use it ?

Add this repo as a NPM dependencies with:

1. `npm install git://github.com/essomia/frontend-boilerplate.git` - to add this repo as your project dependency.
2. Set you project configuration with a `gulpflow.json` file at the same level as you `package.json` to set your project configuration.
3. Run `gulp build` to build entire project from sources folder to destination folder with your project configuration.

## Tasks

This is the full list of tasks, that I could use in a project. All available tasks are placed in the folder `./gulpflow/` as separate `*.js` files and since we use the CommonJS modules format, usually, a filename = task name.

### Core tasks

| Task name | Description                                                        |
| :-------- | :----------------------------------------------------------------- |
| `assets`  | Compile only assets (images, fonts, json,...) to destination.      |
| `build`   | Compile entire project (assets + styles + scripts) to destination. |
| `clean`   | Remove destination files of the project.                           |
| `watch`   | Watch sources files of project for modifications.                  |

### Files tasks

| Task name | Description                                                        |
| :-------- | :----------------------------------------------------------------- |
| `css`     | Optimize `.css` with autoprefixer & cssnano.                       |
| `fonts`   | Copy `.eot/.svg/.ttf/.woff/.woff2`                                 |
| `html`    | Optimize `.html` with htmlmin.                                     |
| `images`  | Optimize `.jpg/.jpeg/.png/.gif/.svg` with imagemin.                |
| `js`      | Optimize `.js` with uglify and include                             |
| `json`    | Optimize `.json` with jsonminify.                                  |
| `scss`    | Compile `.sass/.scss` to `.css` with sass, autoprefixer & cssnano. |

## Configuration file

All default config are written in `./gulpflow/config.js`: conditional compilation, sources paths and tasks list. If you need to configure your own workflow, add a `gulpflow.json` file at the same level as your `package.json`. Then, you can customize your project configuration. Below you have an example of the `gulpflow.json` with its defaults values:

```
{
    "root": {
        "src": "./example/src",
        "dest": "./example/app"
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

## Folders structure

The default supported sources folders structures is:

```
/example/src
    /components
        /<component_name>
            /assets
                /fonts
                /images
                /raw
            /js
            /scss
```

And that will be compiled to destination:

```
/example/app
    /<component_name>
        /assets
            /fonts
            /images
            /raw
        /js
        /scss
```
