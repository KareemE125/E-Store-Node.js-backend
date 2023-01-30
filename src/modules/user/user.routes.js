import { Router } from 'express';
import { getAllUsers, createUser, updateUser, deleteUser, getUsersByConditions, getUsersByIds, getUsersWithProducts } from './controller/user.js';

const router = Router();


router.get('/', getAllUsers)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.get('/query', getUsersByConditions)

router.get('/ids', getUsersByIds)

router.get('/user-with-products', getUsersWithProducts)



export default router;


