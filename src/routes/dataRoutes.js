const express = require('express');
const DataController = require('../controllers/dataController');

const setRoutes = (app) => {
    const router = express.Router();
    const dataController = new DataController();

    router.get('/employees', dataController.getEmployees.bind(dataController));
    router.get('/lang-score', dataController.getEmpsByLanguageScore.bind(dataController));
    router.get('/search-employee', dataController.searchEmployee.bind(dataController));
    router.post('/new-employee', dataController.addEmployee.bind(dataController));
    router.put('/update-employee/:id', dataController.updateEmployee.bind(dataController));
    router.delete('/delete-employee/:id', dataController.deleteEmployee.bind(dataController));

    app.use('/api', router);
};

module.exports = setRoutes;