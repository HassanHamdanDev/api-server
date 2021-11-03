'use strict';

const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let sequlizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(POSTGRES_URL, sequlizeOptions);

const clothesSchema = require('./clothes.model');
const foodSchema = require('./food.model');

const clothesModel = clothesSchema(sequelize, DataTypes);
const foodModel = foodSchema(sequelize, DataTypes);

const Collection = require('./lib/collection-class.model');

const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);

module.exports = {
    db: sequelize,
    clothesCollection: clothesCollection,
    foodCollection: foodCollection
}


