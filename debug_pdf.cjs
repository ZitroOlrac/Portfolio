const pdf = require('pdf-parse');
console.log('Keys:', Object.keys(pdf));
console.log('Type:', typeof pdf);
if (typeof pdf === 'function') {
    console.log('It is a function');
} else if (pdf.default) {
    console.log('It has a default export');
}
