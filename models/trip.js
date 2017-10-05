module.exports = function(sequelize, DataTypes) {

  var Trip = sequelize.define("Trip", {
    id: {
      type: DataTypes.INTEGER,
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
    trip_date: {
      isDate: true,
      allowNull: false
    }
  });

  Trip.associate = function(models) {
    Trip.hasMany(models.Fish, {
      onDelete: "cascade"
    });
  };

  return Trip;
};