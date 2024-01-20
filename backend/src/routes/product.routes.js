import Router from 'express';
import { ProductController } from '../controllers';

const router = Router();

router.get('/', ProductController.getAllProducts);

router.get('/:code', ProductController.getProductById);

router.post('/', ProductController.createProduct);

router.patch('/', ProductController.updateProduct);

router.delete('/', ProductController.deleteProduct);

export default router;
