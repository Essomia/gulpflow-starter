// ------------------------------
// -- ./util/renamePath.js
// ------------------------------

'use strict';

const rename   = require('gulp-rename');


//
// Defined
//

function renamePath(destFolder) {

    return rename((path) => {
        var componentName = path.dirname.split('/')[0];

        path.dirname = componentName + '/' + destFolder;

        return path
    });

}


//
// Exports
//

module.exports = renamePath;
