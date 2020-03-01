const axios = require('axios');

const userRoutes = () => {
    axios.get('https://bpdts-test-app.herokuapp.com/users')
        .then((response) => {
            let filteredUsers = response.data.filter(checkUsers);
            function checkUsers(user) {
                if (((user.latitude >= 50.82) && (user.latitude <= 52.22)) && ((user.longitude >= -1.29) && (user.longitude <= 0.92))) {
                    return user;
                }
            }
            console.log(filteredUsers);
            console.log(response.status);
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = userRoutes;