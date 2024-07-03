import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const getAllProductsController = async (req, res, next) => {
    try {
        const product = await prisma.product.findMany({
            include: {
                category: true,
            }
        });
        console.log(product);
        res.json({
            product,
            message: 'Hello from products page'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findMany({
            where: {
                id: Number(id)
            },
            include: {
                category: true
            }
        })
        console.log(product);
        res.json({
            product,
            message: 'Hello from  single product page'
        })
    } catch (error) {
        console.log(error);
    }
}

const createProductController = async (req, res, next) => {
    try {
        // const data = req.body;
        const product = await prisma.product.create({
            data: req.body
            // data: {
            //     name: req.body.name,
            //     price: req.body.price,
            //     categoryId: req.body.categoryId
            // }
        })
        res.json({
            product,
            message: 'Hello from create product page'
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.delete({
            where: {
                id: Number(id)
            }
        })
        console.log(product);
        res.json({
            product,
            message: 'Hello from delete product page'
        })
    } catch (error) {
        console.log(error);
    }
}

const updateProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.update({
            where: {
                id: Number(id)
            },
            data: req.body,
            include: {
                category: true
            }
        })
        console.log(product);
        res.json({
            product,
            message: 'Hello from update product page'
        })
    } catch (error) {
        console.log(error);
    }
}
export {
    getAllProductsController,
    getProductController,
    createProductController,
    deleteProductController,
    updateProductController
}