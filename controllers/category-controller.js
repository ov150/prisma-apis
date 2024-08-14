import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const getAllCategoriesController = async (req, res, next) => {
    try {
        const category = await prisma.category.findMany({
            include: {
                products: true,
            }
        });
        console.log(category);
        res.json({
            category,
            message: 'Hello from category page'
        })
    } catch (error) {
        console.log(error);
    }
}

const getCategoryController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await prisma.category.findMany({
            where: {
                id
            },
            include: {
                products: true
            }
        })
        console.log(category);
        res.json({
            category,
            message: 'Hello from  single category page'
        })
    } catch (error) {
        console.log(error);
    }
}

const createCategoryController = async (req, res, next) => {
    try {
        // const data = req.body;
        const category = await prisma.category.create({
            // data: req.body
            data: {
                name: req.body.name
            }
        })
        res.json({
            category,
            message: 'Hello from create category page'
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteCategoryController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await prisma.category.delete({
            where: {
                id
            }
        })
        console.log(category);
        res.json({
            category,
            message: 'Hello from delete category page'
        })
    } catch (error) {
        console.log(error);
    }
}

const updateCategoryController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await prisma.category.update({
            where: {
                id
            },
            data: req.body,
            include: {
                products: true
            }
        })
        console.log(category);
        res.json({
            category,
            message: 'Hello from update category page'
        })
    } catch (error) {
        console.log(error);
    }
}
export {
    getAllCategoriesController,
    getCategoryController,
    createCategoryController,
    deleteCategoryController,
    updateCategoryController
}