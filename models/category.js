/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const category= sequelize.define('categories', {
    id_category: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'categories',
    underscored:true,
    timestamps:true,
    createdAt:'created_at',
    updatedAt:'updated_at'
  });
  return category;
};
