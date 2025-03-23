class RecruitmentSelectionController {
    constructor(recruitmentSelectionService) {
        this.recruitmentSelectionService = recruitmentSelectionService;
    }

    async getCandidates(req, res) {
        try {
            const candidates = await this.recruitmentSelectionService.getAllCandidates();
            res.status(200).json(candidates);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving candidates', error });
        }
    }

    async createCandidate(req, res) {
        try {
            const candidateData = req.body;
            const newCandidate = await this.recruitmentSelectionService.createCandidate(candidateData);
            res.status(201).json(newCandidate);
        } catch (error) {
            res.status(500).json({ message: 'Error creating candidate', error });
        }
    }

    async updateCandidate(req, res) {
        try {
            const candidateId = req.params.id;
            const candidateData = req.body;
            const updatedCandidate = await this.recruitmentSelectionService.updateCandidate(candidateId, candidateData);
            res.status(200).json(updatedCandidate);
        } catch (error) {
            res.status(500).json({ message: 'Error updating candidate', error });
        }
    }

    async deleteCandidate(req, res) {
        try {
            const candidateId = req.params.id;
            await this.recruitmentSelectionService.deleteCandidate(candidateId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting candidate', error });
        }
    }
}

export default RecruitmentSelectionController;