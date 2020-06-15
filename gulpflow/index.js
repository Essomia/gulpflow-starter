const plugins = require('gulp-load-plugins')();

const GulpFlow = (config) => {
    /**
     * Default Config
     */
    const defaultConfig = {
        /**
         * Main path for sources and destinations folder.
         */
        root: {
            src: './example/src/',
            dest: './example/app/'
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
            eslint: `${__dirname}/../.eslintrc.yaml`,
            stylelint: `${__dirname}/../.stylelintrc.yaml`
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
            watch: ['html', 'css', 'json', 'fonts', 'images', 'js', 'scss'],
            build: ['html', 'css', 'json', 'fonts', 'images', 'js', 'scss']
        }
    };


    /**
     * Load Gulflow Tasks
     */
    plugins.loadSubtasks(`${__dirname}/tasks/*.js`, plugins, { ...defaultConfig, ...config });
    plugins.loadSubtasks(`${__dirname}/core/*.js`, plugins, { ...defaultConfig, ...config });
};

module.exports = GulpFlow;
