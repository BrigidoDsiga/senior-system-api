const express = require('express');
const RecruitmentSelectionController = require('../controllers/recruitmentSelectionController');

const setRecruitmentSelectionRoutes = (app) => {
    const router = express.Router();
    const recruitmentSelectionController = new RecruitmentSelectionController();

    router.get('/candidates', recruitmentSelectionController.getCandidates.bind(recruitmentSelectionController));
    router.post('/candidates', recruitmentSelectionController.createCandidate.bind(recruitmentSelectionController));
    router.put('/candidates/:id', recruitmentSelectionController.updateCandidate.bind(recruitmentSelectionController));
    router.delete('/candidates/:id', recruitmentSelectionController.deleteCandidate.bind(recruitmentSelectionController));

    app.use('/api/recruitment-selection', router);
};

module.exports = setRecruitmentSelectionRoutes;