class ElectronicPointService {
    constructor(electronicPointModel) {
        this.electronicPointModel = electronicPointModel;
    }

    async getElectronicPoints(userId) {
        try {
            return await this.electronicPointModel.getPointsByUserId(userId);
        } catch (error) {
            throw new Error('Error fetching electronic points: ' + error.message);
        }
    }

    async clockIn(userId) {
        try {
            const clockInTime = new Date();
            return await this.electronicPointModel.recordClockIn(userId, clockInTime);
        } catch (error) {
            throw new Error('Error clocking in: ' + error.message);
        }
    }

    async clockOut(userId) {
        try {
            const clockOutTime = new Date();
            return await this.electronicPointModel.recordClockOut(userId, clockOutTime);
        } catch (error) {
            throw new Error('Error clocking out: ' + error.message);
        }
    }

    async getAttendanceRecords(userId, startDate, endDate) {
        try {
            return await this.electronicPointModel.getAttendanceRecords(userId, startDate, endDate);
        } catch (error) {
            throw new Error('Error fetching attendance records: ' + error.message);
        }
    }
}

export default ElectronicPointService;