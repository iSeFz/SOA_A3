const DataService = require('../services/dataService');
const dataService = new DataService('./src/data/data.json');
const ValidationUtils = require('../utils/validationsUtils');

class DataController {
    async getEmployees(req, res) {
        try {
            const data = await dataService.readData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving employees' });
        }
    }

    async getEmpsByLanguageScore(req, res) {
        try {
            const data = await dataService.readData();
            if (req.query.language && req.query.score) {
                const language = req.query.language.toLowerCase();
                const score = parseInt(req.query.score, 10);
                const filteredData = data.filter(item =>
                    item.KnownLanguages.some(lang => lang.LanguageName.toLowerCase() === language && lang.ScoreOutOf100 >= score)
                );
                filteredData.forEach(item => {
                    item.KnownLanguages = item.KnownLanguages.filter(lang => lang.LanguageName.toLowerCase() === language);
                });
                const sortedData = filteredData.sort((a, b) => a.KnownLanguages[0].ScoreOutOf100 - b.KnownLanguages[0].ScoreOutOf100);
                res.status(200).json(sortedData);
            } else {
                res.status(400).json({ message: 'Invalid query parameters' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving employees' });
        }
    }

    async searchEmployee(req, res) {
        try {
            const value = req.query.value.toLowerCase();
            const data = await dataService.readData();
            const result = data.filter(item =>
                item.EmployeeID.toString() === value ||
                item.Designation.toLowerCase() === value
            );
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error searching employees' });
        }
    }

    async addEmployee(req, res) {
        try {
            const newData = req.body;
            const data = await dataService.readData();
            const errors = ValidationUtils.validateEmployee(newData, data);
            if (errors.length > 0) {
                return res.status(400).json({ errors });
            }
            data.push(newData);
            await dataService.writeData(data);
            res.status(201).json(newData);
        } catch (error) {
            res.status(500).json({ message: 'Error adding employee' });
        }
    }

    async updateEmployee(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const updatedData = req.body;
            const data = await dataService.readData();
            const index = data.findIndex(item => item.EmployeeID === id);
            if (index !== -1) {
                if (updatedData.EmployeeID) {
                    return res.status(400).json({ message: 'EmployeeID cannot be updated' });
                }
                const errors = ValidationUtils.validateEmployee({ ...data[index], ...updatedData }, data, false);
                if (errors.length > 0) {
                    return res.status(400).json({ errors });
                }
                data[index] = { ...data[index], ...updatedData };
                await dataService.writeData(data);
                res.status(200).json(data[index]);
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating employee' });
        }
    }

    async deleteEmployee(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const data = await dataService.readData();
            const index = data.findIndex(item => item.EmployeeID === id);
            if (index !== -1) {
                data.splice(index, 1);
                await dataService.writeData(data);
                res.status(200).json("Employee deleted successfully");
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting employee' });
        }
    }
}

module.exports = DataController;