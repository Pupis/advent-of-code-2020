const fs = require('fs');

let data = fs.readFileSync('./fixtures/first.txt').toString().split('\n');

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if ((parseInt(data[i]) + parseInt(data[j])) === 2020) {
            console.log('Result is ' + (parseInt(data[i]) * parseInt(data[j])));
        }
        for (let k = j + 1; k < data.length; k++) {
            if ((parseInt(data[i]) + parseInt(data[j]) + parseInt(data[k])) === 2020) {
                console.log('Result is ' + (parseInt(data[i]) * parseInt(data[j]) * parseInt(data[k])));
            }
        }
    }
}
