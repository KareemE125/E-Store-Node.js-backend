import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js'
import UserModel from './user.model.js';

const ProductModel = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
);

UserModel.hasMany(ProductModel, {
    foreignKey: { allowNull: false },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

ProductModel.belongsTo(UserModel, {
    foreignKey: { allowNull: false },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


export default ProductModel;