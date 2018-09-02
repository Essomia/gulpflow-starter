// ------------------------------
// -- Front-end boilerplate
// ------------------------------

'use strict';


//
// Require basic plugins
//

const gulp     = require('gulp');
const plugins  = require('gulp-load-plugins')();


//
// Load gulp tasks
//

plugins.loadSubtasks('gulpflow/tasks/*.js');
