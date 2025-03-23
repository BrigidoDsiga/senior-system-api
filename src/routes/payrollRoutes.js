const express = require('express');
const router = express.Router();
const PayrollService = require('../services/payrollService');
const PayrollController = require('../controllers/payrollController');

const payrollService = new PayrollService();
const payrollController = new PayrollController(payrollService);

router.get('/', (req, res) => payrollController.getAllPayrolls(req, res));
router.get('/:id', (req, res) => payrollController.getPayroll(req, res));
router.post('/', (req, res) => payrollController.createPayroll(req, res));
router.put('/:id', (req, res) => payrollController.updatePayroll(req, res));
router.delete('/:id', (req, res) => payrollController.deletePayroll(req, res));

module.exports = router;