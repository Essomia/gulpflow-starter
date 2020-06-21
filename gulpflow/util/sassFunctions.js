const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

const sassFunctions = {};

sassFunctions['scssfunction-read-file($file)'] = (parameterFile) => {
    const file = parameterFile.getValue();
    const jsonPath = path.join(global.gulpflowConfig.root.src, file);

    if (!fs.existsSync(jsonPath)) {
        throw new Error(`File '${file}' not found`);
    }

    const jsonData = fs.readFileSync(jsonPath).toString();

    return new sass.types.String(jsonData, 'utf-8');
};

module.exports = sassFunctions;
