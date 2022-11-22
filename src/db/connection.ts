import { Sequelize } from "sequelize";

const sequelize = new Sequelize("almacen", "root", "turca2014", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
