'use strict';

const express = require('express');
const { foodCollection } = require('../models/index');
const foodRouter = express.Router();


foodRouter.get('/api/v1/food', getFood);
foodRouter.get('/api/v1/food/:id', getOneFood);
foodRouter.post('/api/v1/food', createFood);
foodRouter.put('/api/v1/food/:id', updateFood);
foodRouter.delete('/api/v1/food/:id', deleteFood);


async function getFood(req, res) {
    const allFood = await foodCollection.read();
    res.status(200).json(allFood);
}

async function getOneFood(req, res) {
    const id = parseInt(req.params.id);
    const oneFood = await foodCollection.read(id);
    res.status(200).json(oneFood);
}

async function createFood(req, res) {
    const obj = req.body;
    let newFood = await foodCollection.create(obj);
    res.status(201).json(newFood);
}

async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let updatedFood = await foodCollection.update(id, obj);
    res.status(201).json(updatedFood);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    const deletedFood = await foodCollection.delete(id);
    res.status(204).json(deletedFood);
}


module.exports = foodRouter;