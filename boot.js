const express = require('express')
const mysql = require('promise-mysql')
const { dbPassword, dbUser, dbPort } = require('./config')

module.exports = () =>
    new Promise((resolve, reject) => {
        // Initialize express
        const app = express()

        // Add important middlewares
        app.use(express.json())

        // Create a database connection
        mysql
            .createConnection({
                host: 'localhost',
                user: dbUser,
                password: dbPassword,
                database: 'rest_api',
                port: dbPort || 3306,
            })
            .then(connection => {
                console.log('DB connection established!')
                global.db = connection
            })

        // Start the webserver on a port
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () => {
            console.log('Webserver started at port', PORT)
            resolve(app)
        })
    })
