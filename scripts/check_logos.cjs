const fs = require('fs');
const sizeOf = require('image-size');
const folder = 'a:/Projects/Website Building/New - Build/Website/public/assets/universities/';

const files = fs.readdirSync(folder).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
files.forEach(file => {
    try {
        const dimensions = sizeOf(folder + file);
        const ratio = dimensions.width / dimensions.height;
        console.log(file + '|' + dimensions.width + '|' + dimensions.height + '|' + ratio.toFixed(2));
    } catch (e) {
        console.error('Error reading', file);
    }
});
