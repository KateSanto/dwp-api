// load up new route for users
const userRoutes = require('./users');

const appRouter = () => {
    
    // running user route module to complete the wire up
    userRoutes();
};

module.exports = appRouter;