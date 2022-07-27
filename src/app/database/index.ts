import { Sequelize } from "sequelize-typescript";
import * as models from './models'

const dialect = "postgres";

const sequelize = new Sequelize("dvdrental4", "postgres", "@89102447", {
    host: "localhost",
    dialect: dialect,
    define: {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    },
    logging: false,
    models: Object.values(models),
});

export const connectDatabase = async () => { 
    await sequelize
        .authenticate()
        .then(() => {
            console.log(`Conectado ao ${dialect} com sucesso`);
        })
        .catch((error: Error) => {
            console.log(`Não foi possível conectar ao ${dialect}: ${error}`);
        });

    sequelize.sync({ alter: true });
}

export default sequelize;
