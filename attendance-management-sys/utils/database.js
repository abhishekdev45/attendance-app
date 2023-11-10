const Sequelize = require("sequelize");

const sequelize = new Sequelize("attendance-sheet","root","@k45264*",{dialect:"mysql",host:"localhost"});

module.exports = sequelize;