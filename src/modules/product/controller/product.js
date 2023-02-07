import { Op } from "sequelize"
import ProductModel from "../../../../DB/models/product.model.js"

export const getAllProducts = (req, res) => {
    ProductModel.findAll()
        .then(result => {
            return res.json({ message: 'Success', products: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const createProduct = (req, res) => {
    ProductModel.create(req.body)
        .then(result => {
            return res.json({ message: 'Success', product: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { UserId } = req.body

    const product = await ProductModel.findOne({ where: { id } });
    if(!product) return res.json({ message: '404 Product Not Found' })
    if (product.dataValues.UserId != UserId) return res.json({ message: 'You don\'t own that product' })

    ProductModel.update(req.body, { where: { id } })
        .then(result => {
            return res.json(result[0]
                ? { message: 'Success', updatedProduct: {...product.dataValues,...req.body} }
                : { message: `404 Product Not Found for ID: ${id}` })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    const { UserId } = req.body

    const product = await ProductModel.findOne({ where: { id } });
    if(!product) return res.json({ message: '404 Product Not Found' })
    if (product.dataValues.UserId != UserId) return res.json({ message: 'You don\'t own that product' })

    ProductModel.destroy({ where: { id } })
        .then(result => {
            return res.json(result
                ? { message: 'Success', deletedProduct: product.dataValues }
                : { message: `404 Product Not Found for ID: ${id}` })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const getProductsByConditions = (req, res) => {
    const { price } = req.query;

    ProductModel.findAll({
        where: {
            price: { [Op.gt]: price }
        }
    })
        .then(result => {
            return res.json({ message: 'Success', products: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const getProductsOfUser = (req, res) => {
    const { UserId } = req.params;

    ProductModel.findAll({
        where: {
            UserId
        }
    })
        .then(result => {
            return res.json({ message: 'Success', products: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}