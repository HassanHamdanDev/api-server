'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');
let id;

beforeAll(async () => {
    await db.sync();
});

afterAll(async () => {
    await db.drop();
});

describe('Web server', () => {
    it('Should responed 404', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });
});

describe('food CRUD test', () => {
    it('add new item', async () => {
        const response = await mockRequest.post('/api/v1/food').send({
            foodName: "foojel",
            foodType: "jordanain"
        });
        expect(response.status).toBe(201);
        id = response.body.id
    });
    it('get all items', async () => {
        const response = await mockRequest.get('/api/v1/food');
        expect(response.status).toBe(200);
    });
    it('get one items', async () => {
        const response = await mockRequest.get(`/api/v1/food/${id}`);
        expect(response.status).toBe(200);
    });
    it('update item', async () => {
        const response = await mockRequest.put(`/api/v1/food/${id}`).send({
            foodName: "foojel",
            foodType: "jordanain"
        });
        expect(response.status).toEqual(201);
    });
    it('delete item', async () => {
        const response = await mockRequest.delete(`/api/v1/food/${id}`);
        expect(response.status).toEqual(204);
    });
});

describe('clothes CRUD test', () => {
    it('add new item', async () => {
        const response = await mockRequest.post('/api/v1/clothes').send({
            brandName: "foojel",
            clotheType: "jordanain"
        });
        expect(response.status).toBe(201);
        id = response.body.id
    });
    it('get all items', async () => {
        const response = await mockRequest.get('/api/v1/clothes');
        expect(response.status).toBe(200);
    });
    it('get one items', async () => {
        const response = await mockRequest.get(`/api/v1/clothes/${id}`);
        expect(response.status).toBe(200);
    });
    it('update item', async () => {
        const response = await mockRequest.put(`/api/v1/clothes/${id}`).send({
            brandName: "foojel",
            clotheType: "jordanain"
        });
        expect(response.status).toEqual(201);
    });
    it('delete item', async () => {
        const response = await mockRequest.delete(`/api/v1/clothes/${id}`);
        expect(response.status).toEqual(204);
    });
});


