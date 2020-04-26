// ------------------------------
// -- Front-end boilerplate
// ------------------------------

const plugins = require('gulp-load-plugins')();
const config = require('gulpflow/config');


//
// Load Gulp Tasks
//

plugins.loadSubtasks(`${__dirname}/gulpflow/tasks/*.js`, plugins, config);
plugins.loadSubtasks(`${__dirname}/gulpflow/core/*.js`, plugins, config);
