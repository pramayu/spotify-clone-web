'use strict';

module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('users', {
    id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true},
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true},
    password: { type: DataTypes.STRING, allowNull: false },
    avatar: { type: DataTypes.STRING },
    gender: {type: DataTypes.STRING},
    agree: {type: DataTypes.BOOLEAN}
  });
  return User;
}
