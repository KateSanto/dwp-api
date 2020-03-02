// const app = require('./server');
// const request = require('supertest');
// const axios = require('axios');
// const checkUsers = require('./routes/users');
// const mockAxios = require('axios');
const userRoutes = require('./routes/users');
const supertest = require('supertest');
const appRouter = require('./routes/routes')


// test('tests the base route and returns "Array" for typeof data', async () => {
//     const data = await userRoutes();
//     expect(typeof data).toEqual("Array");
//   });


describe("Testing API", () => {
    test("tests the base route and returns 200 for response status", async() => {
        const response = await supertest(userRoutes).get('/');
        //need to troubleshoot this. When running API in terminal, status is 200, but test fails.
        expect(response.status).toEqual(200);
    });
})








//////////

// describe("app", () => {
//     test("description of test", () => {
//       expect(typeof user).toBe("object");

//     });
// })



////////


// let testUsers = [
//     {

//       first_name: 'FirstTest1',
//       last_name: 'LastTest1',
//       email: 'test1@test.com',
//       ip_address: '12.3.45.678',
//       latitude: 51.6553959,
//       longitude: 0.0572553
//     },
//     {

//       first_name: 'FirstTest2',
//       last_name: 'LastTest2',
//       email: 'test2@test.com',
//       ip_address: '12.3.45.678',
//       latitude: 49.6710832,
//       longitude: 0.8078532
//     },
//     {

//       first_name: 'FirstTest3',
//       last_name: 'LastTest3',
//       email: 'test3@test.com',
//       ip_address: '100.89.186.13',
//       latitude: 51.5489435,
//       longitude: -2.3860497
//     }
//   ];

//   let returnedUsers = [
//     {

//       first_name: 'FirstTest1',
//       last_name: 'LastTest1',
//       email: 'test1@test.com',
//       ip_address: '12.3.45.678',
//       latitude: 51.6553959,
//       longitude: 0.0572553
//     }
//   ];



// test("if test user's latitude or longitude is outside accepted limits, expect user to not be on returned result", () => {
//     mockAxios.get.mockImplementationOnce(() =>
//       Promise.resolve(testUsers)
//     );
//   return users.userRoutes().then(response => {
//       expect(response).toEqual(returnedUsers);
//     });
//   });











// describe("app", () => {
//     test("if test user's latitude or longitude is outside accepted limits, expect user to not be on returned result", (done) => {


//         request(checkUsers)
//             .get(testUsers)
//             .expect(200, returnedUsers, done);
//     });


// });






// describe("testing API", () => {
//     const testUsers = [
//         {

//             first_name: 'FirstTest1',
//             last_name: 'LastTest1',
//             email: 'test1@test.com',
//             ip_address: '12.3.45.678',
//             latitude: 51.6553959,
//             longitude: 0.0572553
//         },
//         {

//             first_name: 'FirstTest2',
//             last_name: 'LastTest2',
//             email: 'test2@test.com',
//             ip_address: '12.3.45.678',
//             latitude: 49.6710832,
//             longitude: 0.8078532
//         },
//         {

//             first_name: 'FirstTest3',
//             last_name: 'LastTest3',
//             email: 'test3@test.com',
//             ip_address: '100.89.186.13',
//             latitude: 51.5489435,
//             longitude: -2.3860497
//         }
//     ];

//     const returnedUsers = [
//         {
//             first_name: 'FirstTest1',
//             last_name: 'LastTest1',
//             email: 'test1@test.com',
//             ip_address: '12.3.45.678',
//             latitude: 51.6553959,
//             longitude: 0.0572553
//         }
//     ];

//     test("if test user's latitude or longitude is outside accepted limits, expect user to not be on returned result", () => {
//         let result = testUsers.filter(checkUsers);
//         expect(result).toEqual(returnedUsers);
//     });
// });

