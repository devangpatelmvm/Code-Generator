import UserController from '../controller/user.controller';

const router = require('express').Router()


router.post('/createUser',UserController.createUser);
router.post('/loginUser',UserController.loginUser);
router.post('/getUserbyUserId',UserController.getUserbyUserId);
router.get('/getUsers',UserController.getUsers);

export default router;