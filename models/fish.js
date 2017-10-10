module.exports = function(sequelize, DataTypes) {

  var Fish = sequelize.define("Fish", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fish_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bait: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Fish.associate = function(models) {
    Fish.belongsTo(models.Trip, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Fish;
};