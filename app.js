const boot = require('./boot')

boot().then(app => {
    app.get('/test', async (req, res) => {
        const { db } = global
        const result = await db.query('SELECT * FROM todos')
        res.json(result)
    })
})
