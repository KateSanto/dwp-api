const users = require('../data/users.json');

const userRoutes = (app) => {

    app.get('/users/:city', (req, res) => {
        if (req.params.city.toUpperCase() === "London".toUpperCase()) {
            filteredUsers = users.filter(checkUsers);

            function checkUsers(user) {
                if (((user.latitude >= 50.82) && (user.latitude <= 52.22)) && ((user.longitude >= -1.29) && (user.longitude <= 0.92))) {
                    return user;
                }

            }
            res.send(filteredUsers);
        } else {
            res.status(400).send('This search is only available for London');
        }
    });

}


module.exports = userRoutes;
