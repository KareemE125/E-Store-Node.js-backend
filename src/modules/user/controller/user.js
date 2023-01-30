import { Op } from "sequelize"
import ProductModel from "../../../../DB/models/product.model.js"
import UserModel from "../../../../DB/models/user.model.js"


export const getAllUsers = (req, res) => {
    UserModel.findAll()
        .then(result => {
            return res.json({ message: 'Success', users: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const createUser = (req, res) => {
    UserModel.create(req.body)
        .then(result => {
            return res.json({ message: 'Success', user: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const updateUser = (req, res) => {
    const { id } = req.params

    UserModel.update(req.body, { where: { id: id } })
        .then(result => {
            return res.json(result[0]
                ? { message: 'Success', updatedUserId: result[0] }
                : { message: `404 User Not Found for ID: ${id}` })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    UserModel.destroy({ where: { id: id } })
        .then(result => {
            return res.json(result
                ? { message: 'Success', deletedUserId: parseInt(id) }
                : { message: `404 User Not Found for ID: ${id}` })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const getUsersByConditions = (req, res) => {
    const { letter, age } = req.query;

    UserModel.findAll({
        where: {
            [Op.and]:[
                { name: { [Op.like]:`${letter}%` } },
                { age: { [Op.lt]: age }}
            ]
        }
    })
        .then(result => {
            return res.json({ message: 'Success', users: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const getUsersByIds = (req, res) => {
    const { ids } = req.body;

    UserModel.findAll({
        where: {
            id: ids
        }
    })
        .then(result => {
            return res.json({ message: 'Success', users: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

export const getUsersWithProducts = (req, res) => {
    UserModel.findAll({
        include: { model: ProductModel, required: true },
    })
        .then(result => {
            return res.json({ message: 'Success', users: result })
        })
        .catch(error => res.json({ message: 'Failed', error }))
}

