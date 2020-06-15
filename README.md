# Gulpflow Starter

Gulpflow Starter is a basic boilerplate to start a gulp front-end project with scss, babel, linter and images optimisation.

## Dependencies

Make sure the following are installed first:

- Node.Js
- Gulp Command Line Utility

## Installation

Add this repository as one of your project dependencies.

```
npm install git://github.com/essomia/gulpflow-starter.git
```

Set your project to use the boilerplate within the `gulpfile.js` file.

```js
const boilerplate = require('@essomia/gulpflow-starter')();
```

Now, you can run `gulp build` to build project from sources folder to destinations folder **with the default configuration**.

## Configuration

All default configuration are written in `./gulpflow/index.js`: conditional compilation, source paths and tasks list.

If you need to configure your own workflow, adjust your `gulpfile.js` file and pass your custom configuration to the boilerplate.

Below you have an example of custom configuration:

```js
const customConfig = {
    /**
     * Main path for sources and destinations folder.
     */
    root: {
        src: './src/',
        dest: './build/'
    },

    /**
     * Conditional configuration for project.
     */
    ifs: {
        doLinter: true,
        doMinify: true,
        doSourcemaps: false
    },

    /**
     * Main linters files.
     */
    linters: {
        eslint: `./.eslintrc.yaml`,
        stylelint: `./.stylelintrc.yaml`
    },

    /**
     * List sources folders for specific task.
     *
     * @note Following format {key}:{value}
     *   @var {key}   - Task name from `./gulpflow/tasks/` folder.
     *   @var {value} - Array|String of all path to look for files.
     */
    sources: {
        css: 'components/**/assets/raw/**/*.css',
        fonts: 'components/**/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',
        html: 'components/**/assets/raw/**/*.html',
        images: 'components/**/assets/images/**/*.{jpg,jpeg,png,gif,svg}',
        js: 'components/**/js/**/*.js',
        json: 'components/**/assets/raw/**/*.json',
        scss: 'components/**/scss/**/*.{sass,scss}'
    },

    /**
     * List destinations folders for specific task.
     *
     * @note Following format {key}:{value}
     *   @var {key}   - Task name from `./gulpflow/tasks/` folder.
     *   @var {value} - Array|String of all path to look for files.
     */
    destinations: {
        css: 'css/',
        fonts: 'fonts/',
        html: 'templates/',
        images: 'images/',
        js: 'scripts/',
        json: 'json/',
        scss: 'styles/'
    },

    /**
     * Main tasks to run.
     *
     * @note Following format {key}:{value}
     *   @var {key}   - Task name from `./gulpflow/core/` folder.
     *   @var {value} - Array of all tasks from `./gulpflow/tasks/` folder to run.
     */
    tasks: {
        watch: ['js', 'scss'],
        build: ['html', 'css', 'json', 'fonts', 'images', 'js', 'scss']
    }
};

const boilerplate = require('@essomia/gulpflow-starter')(customConfig);
```

## Tasks

This is the full list of tasks available, that you can use in a project.

All available tasks are placed in the folder `./gulpflow/` as separate `*.js` files and since we use the CommonJS modules format, usually, a filename equal a task name.

### Core tasks

| Task name | Description                                                         |
| :-------- | :------------------------------------------------------------------ |
| `build`   | Compile entire project (assets + styles + scripts) to destinations. |
| `clean`   | Remove destinations files of the project.                           |
| `watch`   | Watch sources files of project for modifications.                   |

### Files tasks

| Task name | Description                                                                                    |
| :-------- | :--------------------------------------------------------------------------------------------- |
| `css`     | Optimize `.css` with autoprefixer & cssnano.                                                   |
| `fonts`   | Copy `.eot/.svg/.ttf/.woff/.woff2`                                                             |
| `html`    | Optimize `.html` with htmlmin.                                                                 |
| `images`  | Optimize `.jpg/.jpeg/.png/.gif/.svg` with imagemin.                                            |
| `js`      | Optimize `.js` with uglify and include + Lint files with babel and eslint.                     |
| `json`    | Optimize `.json` with jsonminify.                                                              |
| `scss`    | Compile `.sass/.scss` to `.css` with sass, autoprefixer & cssnano + Lint files with stylelint. |

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

And that will be compiled to destinations:

```
/example/app
    /css/<component_name>
    /fonts/<component_name>
    /images/<component_name>
    /json/<component_name>
    /scripts/<component_name>
    /styles/<component_name>
    /templates/<component_name>
```
