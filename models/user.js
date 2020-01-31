/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    password: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    first_name: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    last_name: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'users',
    underscored:true,
    timestamps:true,
    createdAt:'created_at',
    updatedAt:'updated_at'
  });
};