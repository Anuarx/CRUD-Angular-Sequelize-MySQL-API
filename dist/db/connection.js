"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("almacen", "root", "turca2014", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
exports.default = sequelize;
