module.exports = function(sequelize, DataTypes) {

  var Trip = sequelize.define("Trip", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tripame: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // tripDate: {
    //   isDate: true,
    //   allowNull: false
    // }
  });

  Trip.associate = function(models) {
    Trip.hasMany(models.Fish, {
      onDelete: "cascade"
    });
  };

  return Trip;
};