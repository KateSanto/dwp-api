
const userRoutes = require('./routes/users');

test('tests the base route and returns "Array" for typeof data', async () => {
    const data = await userRoutes();
    expect(typeof data).toEqual("Array");
  });