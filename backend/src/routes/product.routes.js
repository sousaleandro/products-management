import * as express from 'express';
import ProductController from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', (req, res) => ProductController.getAllProducts(req, res));

router.get('/:code', (req, res) => ProductController.getProductById(req, res));

router.post('/', (req, res) => ProductController.createProduct(req, res));

router.patch('/', (req, res) => ProductController.updateProduct(req, res));

router.delete('/', (req, res) => ProductController.deleteProduct(req, res));

export default router;
