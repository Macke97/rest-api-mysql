# REST API with Express and MySQL

## Requirements
- You need to have a running MySQL server on your computer with a port number you know of.
- You'll need to create a database called `rest_api` and a table called `todos`.

## How to run the project
1. Run `yarn` or `npm install` to install the required modules.
2. In the `config.js` file, change the `dbUser` and `dbPassword` to fit your database server. You may also need to add a `dbPort` config if you're running your MySQL server on another port than `3306`.
3. Run `yarn dev` or `npm run dev` to have the server running with nodemon (restarting server on save), or run the `start` script instead for regular mode.
4. Default port the webserver is listening on is `4000` if you're not specifying anything else with a environment variable.
5. Example routes are `/todos` and `/todo/:id`. There are more routes that can be added for more functionality, so a good practise would be to try to extend it yourself.

Happy coding 💻