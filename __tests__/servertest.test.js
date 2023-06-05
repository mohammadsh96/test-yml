'use strict';
const server = require('../index.js');
const supertest = require('supertest');
const request = supertest(server.app);

afterAll(() => {
    server.close();
});

describe('myserver test', () => {
    test('getting data from home route', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello from home page route');
    });

    test('getting data from about route', async () => {
        const response = await request.get('/about');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });

    test('getting data from bad route', async () => {
        let num = [1, 2, 3, 4, 5];
        num.forEach((x) => {
            console.log(x);
        });
    });

    test('getting data from not found route', async () => {
        const response = await request.get('/notfound');
        expect(response.status).toEqual(404);
    });
});
