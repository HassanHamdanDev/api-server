'use strict';

const foodSchema = (sequelize, DataTypes) => sequelize.define('food', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodType: {
        type: DataTypes.STRING
    }
});

module.exports = foodSchema;