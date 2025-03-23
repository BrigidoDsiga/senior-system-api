const Payroll = require('../models/payrollModel');

class PayrollService {
    async getPayroll(id) {
        return await Payroll.findByPk(id);
    }

    async getAllPayrolls() {
        return await Payroll.findAll();
    }

    async createPayroll(payrollData) {
        return await Payroll.create(payrollData);
    }

    async updatePayroll(id, payrollData) {
        const payroll = await Payroll.findByPk(id);
        if (payroll) {
            return await payroll.update(payrollData);
        }
        throw new Error('Payroll not found');
    }

    async deletePayroll(id) {
        const payroll = await Payroll.findByPk(id);
        if (payroll) {
            return await payroll.destroy();
        }
        throw new Error('Payroll not found');
    }
}

module.exports = PayrollService;