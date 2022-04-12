const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/custom-angular-elements/runtime.js',
        './dist/custom-angular-elements/polyfills.js',
        './dist/custom-angular-elements/scripts.js',
        './dist/custom-angular-elements/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/custom-angular-elements.js');
    await fs.copyFile('./dist/custom-angular-elements/styles.css', 'elements/styles.css');

})()