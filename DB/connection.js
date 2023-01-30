import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('SequelizeDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Check the Database Connection
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {  console.log('Unable to connect to the database:', error); }

export const ConnectDB = async () => {
    await sequelize.sync({ alter: false, force: false })
        .then(result => console.log("DB Connected"))
        .catch(error => console.log("DB Connection Failed", error))
}