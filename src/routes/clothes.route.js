'use strict';

const express = require('express');
const { clothesCollection } = require('../models/index');
const clothesRouter = express.Router();

clothesRouter.get('/api/v1/clothes', getClothes);
clothesRouter.get('/api/v1/clothes/:id', getOneClothe);
clothesRouter.post('/api/v1/clothes', createClothe);
clothesRouter.put('/api/v1/clothes/:id', updateClothe);
clothesRouter.delete('/api/v1/clothes/:id', deleteClothe);


async function getClothes(req, res) {
    const allClothes = await clothesCollection.read();
    res.status(200).json(allClothes);
}

async function getOneClothe(req, res) {
    const id = parseInt(req.params.id);
    const oneClothe = await clothesCollection.read(id);
    res.status(200).json(oneClothe);
}

async function createClothe(req, res) {
    const obj = req.body;
    let newClothe = await clothesCollection.create(obj);
    res.status(201).json(newClothe);
}

async function updateClothe(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let updatedClothe = await clothesCollection.update(id, obj);
    res.status(201).json(updatedClothe);
}

async function deleteClothe(req, res) {
    const id = parseInt(req.params.id);
    const deletedClothe = await clothesCollection.delete(id);
    res.status(204).json(deletedClothe);
}

module.exports = clothesRouter;
