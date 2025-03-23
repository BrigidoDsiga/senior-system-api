class PayrollController {
    constructor(payrollService) {
        this.payrollService = payrollService;
    }

    async getPayroll(req, res) {
        try {
            const payrollData = await this.payrollService.getPayroll(req.params.id);
            res.status(200).json(payrollData);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving payroll data', error });
        }
    }

    async getAllPayrolls(req, res) {
        try {
            const payrolls = await this.payrollService.getAllPayrolls();
            res.status(200).json(payrolls);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving payroll data', error });
        }
    }

    async createPayroll(req, res) {
        try {
            const newPayroll = await this.payrollService.createPayroll(req.body);
            res.status(201).json(newPayroll);
        } catch (error) {
            res.status(500).json({ message: 'Error creating payroll', error });
        }
    }

    async updatePayroll(req, res) {
        try {
            const updatedPayroll = await this.payrollService.updatePayroll(req.params.id, req.body);
            res.status(200).json(updatedPayroll);
        } catch (error) {
            res.status(500).json({ message: 'Error updating payroll', error });
        }
    }

    async deletePayroll(req, res) {
        try {
            await this.payrollService.deletePayroll(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting payroll', error });
        }
    }
}

module.exports = PayrollController;