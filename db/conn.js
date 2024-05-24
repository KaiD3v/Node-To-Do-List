const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc2", "kaidev", "1234", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.log(`Não foi possível conectar!: ${error}`);
  }
})();

module.exports = sequelize;
