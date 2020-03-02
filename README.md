This is a REST API with a GET endpoint implemented. It fetches data from an existing API and returns a subset of that data that meets the specified criteria.

# Technologies used

## Express
This is a web application framework that provides different useful features and HTTP utility methods

## Body Parser
This helps process the body of requests sent to the express server

## Nodemon
This acts as a file-watcher, reloading our server when we make changes to our files

## Axios
This is a Javascript library I've used to make HTTP requests to the existing API. It helped me bring data into my own API and make it available so I could process it.

# Useful commands

## npm start
Will launch listening on port 3001

## npm run test
Will run all tests in the test file

# Testing notes
The test file (api.test.js) is still work in progress. I have used Jest and supertest to write two tests. One to check that the response status is the expected (200) and another one to check that the data type of the filtered result is the expected (Array). I have tried different approaches (mocking a request, writing async tests, using return/.then statements), but none have worked. I have enjoyed the challenge and have learned a lot while trying out different options, but testing asynchronous code is definitely a space for me to improve on.