// const users = require('../data/users.json');
const axios = require('axios');

const userRoutes = (app) => {
    axios.get('https://bpdts-test-app.herokuapp.com/users')
        .then((response) => {
            let filteredUsers = response.data.filter(checkUsers);
            function checkUsers(user) {
                if (((user.latitude >= 50.82) && (user.latitude <= 52.22)) && ((user.longitude >= -1.29) && (user.longitude <= 0.92))) {
                    return user;
                }
            }
            console.log(filteredUsers);
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = userRoutes;



   // app.get('/users/:city', (req, res) => {
    //     if (req.params.city.toUpperCase() === "London".toUpperCase()) {
    //         filteredUsers = users.filter(checkUsers);

    //         function checkUsers(user) {
    //             if (((user.latitude >= 50.82) && (user.latitude <= 52.22)) && ((user.longitude >= -1.29) && (user.longitude <= 0.92))) {
    //                 return user;
    //             }

    //         }
    //         res.send(filteredUsers);
    //     } else {
    //         res.status(400).send('This search is only available for London');
    //     }
    // });