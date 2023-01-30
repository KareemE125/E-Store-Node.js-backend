import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js'

const UserModel = sequelize.define(
    'User',
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
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        age: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: true,
    }
);


export default UserModel;