class RecruitmentSelectionService {
    constructor(recruitmentSelectionModel) {
        this.recruitmentSelectionModel = recruitmentSelectionModel;
    }

    async getCandidates() {
        try {
            const candidates = await this.recruitmentSelectionModel.getAllCandidates();
            return candidates;
        } catch (error) {
            throw new Error('Error fetching candidates: ' + error.message);
        }
    }

    async createCandidate(candidateData) {
        try {
            const newCandidate = await this.recruitmentSelectionModel.addCandidate(candidateData);
            return newCandidate;
        } catch (error) {
            throw new Error('Error creating candidate: ' + error.message);
        }
    }

    async updateCandidate(candidateId, updatedData) {
        try {
            const updatedCandidate = await this.recruitmentSelectionModel.updateCandidate(candidateId, updatedData);
            return updatedCandidate;
        } catch (error) {
            throw new Error('Error updating candidate: ' + error.message);
        }
    }

    async deleteCandidate(candidateId) {
        try {
            const result = await this.recruitmentSelectionModel.deleteCandidate(candidateId);
            return result;
        } catch (error) {
            throw new Error('Error deleting candidate: ' + error.message);
        }
    }
}

export default RecruitmentSelectionService;