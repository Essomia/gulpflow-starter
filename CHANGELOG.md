# Change log

## Unreleased

---

## Releases

### [1.5.4](https://github.com/essomia/gulpflow-starter/compare/1.5.3...1.5.4)

- _Fix_: NPM dependencies warning.
- _Fix_: Remove useless eslint-config-standard after update.

### [1.5.3](https://github.com/essomia/gulpflow-starter/compare/1.5.2...1.5.3)

- _Fix_: NPM dependencies warning.

### [1.5.2](https://github.com/essomia/gulpflow-starter/compare/1.5.1...1.5.2)

- _Fix_: NPM dependencies warning.

### [1.5.1](https://github.com/essomia/gulpflow-starter/compare/1.5.0...1.5.1)

- _Fix_: NPM dependencies warning.

### [1.5.0](https://github.com/essomia/gulpflow-starter/compare/1.4.0...1.5.0)

- Add missing [license](./LICENSE) file.
- Add gulpflow project configuration to `global` namespace.
- Create new `sassFunctions` to improve `sass` compiler with custom functions.
- Modify example component to use new sass functions: replace color of a svg image to be use inline.

### [1.4.0](https://github.com/essomia/gulpflow-starter/compare/1.3.0...1.4.0)

- Add new config `destinations` use by `gulp-rename` to rename dirname for build files.
- Adjust documentation on how to use the new config.

### [1.3.0](https://github.com/essomia/gulpflow-starter/compare/1.2.3...1.3.0)

- Adjust linters `.eslintrc` and `.stylelintrc` rules to be less restrictive.
- Base `.eslintrc` rules on _airbnb-base_ javascript config.
- Add conditional flag for linters in tasks.
- Use `gulp-load-subtasks` to pass modules dependencies and configuration in tasks.
- Move default `config.js` data into and `index.js` file to allow custom configuration in projects.
- Improve documentation on how to use the boilerplate.
- Rename the package name to `gulpflow-starter`.

### [1.2.3](https://github.com/essomia/gulpflow-starter/compare/1.2.2...1.2.3)

- Add `.editorconfig` and `.prettierrc` files for coding standard/formating.
- Create a `CHANGELOG.md` file to separate release notes from `README.md`.
- Rename `./demo/` folder to be `./example/` and adjust related config.
- Move from bower to npm for `./example/` folder.
- Adjust task files to respect new standard.
- _Fix_: Error on _images_ task build since we did update dependencies.

### [1.2.2](https://github.com/essomia/gulpflow-starter/compare/1.2.1...1.2.2)

- _Fix_: NPM dependencies warning.

### [1.2.1](https://github.com/essomia/gulpflow-starter/compare/1.2.0...1.2.1)

- _Fix_: NPM dependencies warning.

### [1.2.0](https://github.com/essomia/gulpflow-starter/compare/1.1.4...1.2.0)

- Add style linter.
- Add javascript linter with `babel` to compile ES6+.
- Rename some configs node to match task name.

### [1.1.4](https://github.com/essomia/gulpflow-starter/compare/1.1.3...1.1.4)

- _Fix_: NPM dependencies warning.
- _Fix_: Error `browsersList` that came from `autoprefixer` package.
- Remove `gulp-cssnano` to use `gulp-postcss` and `cssnano` instead.

### [1.1.3](https://github.com/essomia/gulpflow-starter/compare/1.1.2...1.1.3)

- _Fix_: Keep watching partial files (ie. `**/_partial.ext`) but dont build them if not included in a main files (ie. `**/main.ext`).
- _Fix_: Example for multiple components.
- _Fix_: Be sure to print final file path when tasks is finished.

### [1.1.2](https://github.com/essomia/gulpflow-starter/compare/1.1.1...1.1.2)

- _Fix_: NPM dependencies warning.

### [1.1.1](https://github.com/essomia/gulpflow-starter/compare/1.1.0...1.1.1)

- _Fix_: Correct input path for tasks.
- _Fix_: Adjust documentation of the `gulpflow.json`.
- _Fix_: Merged project configuration.

### [1.1.0](https://github.com/essomia/gulpflow-starter/compare/1.0.0...1.1.0)

- Add merge configuration feature to custom your project configuration.
- Adjust tasks and configuration to be more customisable.

### [1.0.0](https://github.com/essomia/gulpflow-starter/tree/1.0.0)

- Initial project with all basics tasks in `./gulpflow/*`.
- Add example of project folder structure in `./demo/src/` to be compiled into `./demo/build/`.
