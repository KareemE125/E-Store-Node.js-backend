import { Sequelize } from "sequelize";
import config from "config"

const { name, username, password, host, dialect } = config.database;

export const sequelize = new Sequelize(name, username, password, {
    host,
    dialect
});

// Check the Database Connection
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) { console.log('Unable to connect to the database:', error); }

export const ConnectDB = async () => {
    await sequelize.sync({ alter: false, force: false })
        .then(result => console.log("DB Connected"))
        .catch(error => console.log("DB Connection Failed", error))
}