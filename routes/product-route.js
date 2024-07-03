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
//http://localhost:4000/api/v1/create
router.post('/create', createProductController)
//http://localhost:4000/api/v1/delete/123
router.delete('/delete/:id', deleteProductController)
//http://localhost:4000/api/v1/update
router.patch('/update/:id', updateProductController)
export default router;