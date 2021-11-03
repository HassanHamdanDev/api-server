'use strict';

const clothesSchema = (sequelize, DataTypes) => sequelize.define('clothes', {
    brandName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clotheType: {
        type: DataTypes.STRING
    }
});

module.exports = clothesSchema;