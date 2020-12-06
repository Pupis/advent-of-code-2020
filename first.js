const fs = require('fs');

let data = fs.readFileSync('./fixtures/first.txt').toString().split('\n');
let i, j;
for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if ((parseInt(data[i]) + parseInt(data[j])) === 2020) {
            console.log('Result is ' + (parseInt(data[i]) * parseInt(data[j])));
        }
    }
}
