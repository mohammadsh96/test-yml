'use strict';
const server = require('../index.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('myserver test', () => {
it('getting data from home route', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello from home page route');
});
it('getting data from about route', async () => {
    const response = await request.get('/about');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
});
it('getting data from bad route', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
});
it ('getting data from not found route', async () => {
    const response = await request.get('/notfound');
    expect(response.status).toEqual(404);
});
});
