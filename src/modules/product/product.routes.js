import { Router } from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct, getProductsByConditions, getProductsOfUser } from './controller/product.js';

const router = Router();

router.get('/',getAllProducts)

router.post('/',createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.get('/query', getProductsByConditions)

router.get('/owner/:UserId', getProductsOfUser)



export default router;

