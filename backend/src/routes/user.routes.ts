import {Router} from 'express'
const router = Router();

import * as userController from '../controllers/user.controller'

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export default router
