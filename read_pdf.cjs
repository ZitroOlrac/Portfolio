const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function extractText() {
    try {
        let dataBuffer = fs.readFileSync('D:\\Web\\Portfolio\\dist\\media\\ResumeCV_Es_CarloGameDev.pdf');
        const parser = new PDFParse();
        const data = await parser.parse(dataBuffer);
        console.log('---START---');
        console.log(data.text);
        console.log('---END---');
    } catch (error) {
        console.error('Error reading PDF:', error);
    }
}

extractText();
