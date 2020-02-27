const app = require('./server');
const request = require('supertest');

describe("app", () => {
    test("when city name isn't capitalised, API should still return results", (done) => {
        request(app)
        .get('/users/london')
        .expect(200, done);
    });
  
    
  });