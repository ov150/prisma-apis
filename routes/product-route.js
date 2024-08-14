import express from "express"
import {
    getAllProductsController,
    getProductController,
    createProductController,
    deleteProductController,
    updateProductController
}
    from "../controllers/product-controller.js";
const router = express.Router();
//http://localhost:4000/api/v1/products
router.get('/products', getAllProductsController)
//http://localhost:4000/api/v1/product/123
router.get('/product/:id', getProductController)
//http://localhost:4000/api/v1/product
router.post('/product', createProductController)
//http://localhost:4000/api/v1/product/123
router.delete('/product/:id', deleteProductController)
//http://localhost:4000/api/v1/product
router.patch('/product/:id', updateProductController)
export default router;