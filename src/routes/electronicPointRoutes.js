const express = require('express');
const ElectronicPointController = require('../controllers/electronicPointController');

const setElectronicPointRoutes = (app) => {
    const router = express.Router();
    const electronicPointController = new ElectronicPointController();

    router.get('/electronic-points', electronicPointController.getElectronicPoints);
    router.post('/electronic-points/clock-in', electronicPointController.clockIn);
    router.post('/electronic-points/clock-out', electronicPointController.clockOut);
    router.get('/electronic-points/attendance-records', electronicPointController.getAttendanceRecords);

    app.use('/api', router);
};

module.exports = setElectronicPointRoutes;