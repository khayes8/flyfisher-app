module.exports = function(sequelize, DataTypes) {

  var Trip = sequelize.define("Trip", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    trip_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Trip.associate = function(models) {
    Trip.hasMany(models.Fish, {
      onDelete: "cascade"
    });
  };

  return Trip;
};