class RecruitmentSelectionModel {
    constructor(db) {
        this.db = db;
    }

    async getCandidates() {
        const query = 'SELECT * FROM candidates';
        const [rows] = await this.db.execute(query);
        return rows;
    }

    async createCandidate(candidateData) {
        const query = 'INSERT INTO candidates (name, email, phone, resume) VALUES (?, ?, ?, ?)';
        const { name, email, phone, resume } = candidateData;
        const [result] = await this.db.execute(query, [name, email, phone, resume]);
        return result.insertId;
    }

    async updateCandidate(id, candidateData) {
        const query = 'UPDATE candidates SET name = ?, email = ?, phone = ?, resume = ? WHERE id = ?';
        const { name, email, phone, resume } = candidateData;
        await this.db.execute(query, [name, email, phone, resume, id]);
    }

    async deleteCandidate(id) {
        const query = 'DELETE FROM candidates WHERE id = ?';
        await this.db.execute(query, [id]);
    }

    async findCandidateById(id) {
        const query = 'SELECT * FROM candidates WHERE id = ?';
        const [rows] = await this.db.execute(query, [id]);
        return rows[0];
    }
}

export default RecruitmentSelectionModel;