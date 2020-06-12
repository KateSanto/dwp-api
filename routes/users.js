const axios = require('axios');

const userRoutes = () => {
    axios.get('https://bpdts-test-app.herokuapp.com/users')
        .then((response) => {
            //const would have been a better way to declare this variable. I'm not going to assign a different value to it, and, if it's const, the system can alert me if I try to reassign it by mistake
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