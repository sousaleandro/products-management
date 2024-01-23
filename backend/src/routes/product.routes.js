import * as express from 'express';
import ProductController from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', (req, res) => ProductController.getAll(req, res));

router.get('/:code', (req, res) => ProductController.getByCode(req, res));

router.post('/', (req, res) => ProductController.create(req, res));

router.patch('/:code', (req, res) => ProductController.update(req, res));

router.delete('/:code', (req, res) => ProductController.exclude(req, res));

export default router;
