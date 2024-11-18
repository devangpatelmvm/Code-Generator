import ProjectController from '../controller/project.controller';
import AuthMiddleware from '../middleware/auth.middleware';
const router = require('express').Router()



router.post('/storeProjectDetails',AuthMiddleware.userAuthMiddleware,ProjectController.storeProjectDetails);
router.post('/downloadProject',AuthMiddleware.userAuthMiddleware,ProjectController.getProjectDetails);
router.post('/getProjectByUserId',AuthMiddleware.userAuthMiddleware, ProjectController.getProjectByUserId);

export default router;