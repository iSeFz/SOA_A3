const fs = require('fs');
const path = require('path');

class DataService {
    constructor(filePath) {
        this.filePath = path.resolve(filePath);
    }

    readData() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }

    writeData(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}

module.exports = DataService;