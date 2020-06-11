
const userRoutes = require('./routes/users');


// const app = require('./server');	
// const request = require('supertest');	
// const axios = require('axios');	
// const checkUsers = require('./routes/users');	
// const mockAxios = require('axios');	
// const userRoutes = require('./routes/users');	
const supertest = require('supertest');	
// const appRouter = require('./routes/routes')	
// const response = require('./routes/users');


test('tests the base route and returns "Array" for typeof data', async () => {
    const data = await userRoutes();
    expect(typeof data).toEqual("Array");
  });


describe("Testing API", () => {
    test("tests the base route and returns 200 for response status", async() => {
        const response = await supertest(userRoutes).get('/');
        //need to troubleshoot this. When running API in terminal, status is 200, but test fails. Issue with async callback timeout
        expect(response.status).toEqual(200);
    });
})