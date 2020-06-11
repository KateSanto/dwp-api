
const userRoutes = require('./routes/users');
const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)



test('tests the base route and returns "Array" for typeof data', async () => {
    const data = await userRoutes();
    expect(typeof data).toEqual("Array");
});


describe("Testing API", () => {
    test("tests the base route and returns 200 for response status", async () => {
        const response = await supertest(userRoutes).get('/');
        //When running API in terminal, status is 200, but test fails. Issue with async callback timeout
        expect(response.status).toEqual(200);
    });
})

//trying out a different syntax
describe('Test a 200', () => {
    test('It should respond with a 200 status', async () => {
        const response = await request(app).get('https://bpdts-test-app.herokuapp.com/users');
        expect(response.statusCode).toBe(200);
    });
});

//trying out a different syntax
describe('Sample Test', () => {
    test('Async test', async done => {
        //   expect(true).toBe(true)
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        done()
    })
})

//Note to self: maybe try this in a sample project separately and then use learnings to fix these tests?:
// https://zellwk.com/blog/endpoint-testing/