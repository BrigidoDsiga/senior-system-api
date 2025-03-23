class ElectronicPointModel {
    constructor(db) {
        this.db = db;
    }

    async getElectronicPoints() {
        const query = 'SELECT * FROM electronic_points';
        const [rows] = await this.db.execute(query);
        return rows;
    }

    async clockIn(employeeId) {
        const query = 'INSERT INTO electronic_points (employee_id, clock_in_time) VALUES (?, NOW())';
        await this.db.execute(query, [employeeId]);
    }

    async clockOut(employeeId) {
        const query = 'UPDATE electronic_points SET clock_out_time = NOW() WHERE employee_id = ? AND clock_out_time IS NULL';
        await this.db.execute(query, [employeeId]);
    }

    async getAttendanceRecords(employeeId) {
        const query = 'SELECT * FROM electronic_points WHERE employee_id = ?';
        const [rows] = await this.db.execute(query, [employeeId]);
        return rows;
    }
}

export default ElectronicPointModel;