/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const expense = sequelize.define('expenses', {
    id_expense: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_category: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'EURO'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'expenses',
    underscored:true,
    timestamps:true,
    updatedAt:'updated_at',
    createdAt:'created_at'
  });
  expense.associate = function (models){
    expense.hasOne(models.categories, { foreignKey: 'id_category'});
    expense.belongsTo(models.users, { foreignKey: 'id_user'});
  };
  return expense;
};