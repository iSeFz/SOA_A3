const express = require('express');
const DataController = require('../controllers/dataController');

const setRoutes = (app) => {
    const router = express.Router();
    const dataController = new DataController();

    router.get('/employees', dataController.getEmployees.bind(dataController));
    router.get('/language-score', dataController.getDataLanguageScore.bind(dataController));
    router.get('/search-employee/:value', dataController.searchData.bind(dataController));
    router.post('/new-employee', dataController.addData.bind(dataController));
    router.put('/employee/:id', dataController.updateData.bind(dataController));
    router.delete('/employee/:id', dataController.deleteData.bind(dataController));

    app.use('/api', router);
};

module.exports = setRoutes;