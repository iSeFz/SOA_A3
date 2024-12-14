module.exports = {
    readJsonFile: (filePath) => {
        const fs = require('fs');
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (parseError) {
                    reject(parseError);
                }
            });
        });
    },

    writeJsonFile: (filePath, data) => {
        const fs = require('fs');
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
};