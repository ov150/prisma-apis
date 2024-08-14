import express from "express"
import {
    getAllCategoriesController,
    getCategoryController,
    createCategoryController,
    deleteCategoryController,
    updateCategoryController
}
    from "../controllers/category-controller.js";
const router = express.Router();
//http://localhost:4000/api/v1/categories
router.get('/categories', getAllCategoriesController)
//http://localhost:4000/api/v1/category/123
router.get('/category/:id', getCategoryController)
//http://localhost:4000/api/v1/category
router.post('/category', createCategoryController)
//http://localhost:4000/api/v1/category/123
router.delete('/category/:id', deleteCategoryController)
//http://localhost:4000/api/v1/category
router.patch('/category/:id', updateCategoryController)
export default router;