var DataTypes = require("sequelize").DataTypes;
var _config = require("./config");
var _links = require("./links");
var _tipo_link = require("./tipo_link");

function initModels(sequelize) {
  var config = _config(sequelize, DataTypes);
  var links = _links(sequelize, DataTypes);
  var tipo_link = _tipo_link(sequelize, DataTypes);

  links.belongsTo(tipo_link, { as: "tipo_tipo_link", foreignKey: "tipo"});
  tipo_link.hasMany(links, { as: "links", foreignKey: "tipo"});

  return {
    config,
    links,
    tipo_link,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
