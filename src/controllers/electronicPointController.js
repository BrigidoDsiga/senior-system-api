class ElectronicPointController {
    constructor(electronicPointService) {
        this.electronicPointService = electronicPointService;
    }

    async getElectronicPoints(req, res) {
        try {
            const electronicPoints = await this.electronicPointService.getAllElectronicPoints();
            res.status(200).json(electronicPoints);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving electronic points', error });
        }
    }

    async clockIn(req, res) {
        const { userId } = req.body;
        try {
            const result = await this.electronicPointService.clockIn(userId);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error clocking in', error });
        }
    }

    async clockOut(req, res) {
        const { userId } = req.body;
        try {
            const result = await this.electronicPointService.clockOut(userId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error clocking out', error });
        }
    }

    async getAttendanceRecords(req, res) {
        const { userId } = req.params;
        try {
            const records = await this.electronicPointService.getAttendanceRecords(userId);
            res.status(200).json(records);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving attendance records', error });
        }
    }
}

export default ElectronicPointController;