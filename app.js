const boot = require('./boot')
const { checkIfBodyExists } = require('./middlewares')

boot().then(app => {
    // Get all todos
    app.get('/todos', async (req, res) => {
        const { db } = global
        const result = await db.query('SELECT * FROM todos')
        res.json(result)
    })

    // Get todo by id
    app.get('/todo/:id', async (req, res) => {
        const { db } = global
        const { id } = req.params
        const result = await db.query('SELECT * FROM todos WHERE id = ?', [id])
        if (result.length) {
            res.json(result)
        } else {
            res.status(404).send('Not found')
        }
    })

    // Add a todo
    app.post('/todos', checkIfBodyExists, async (req, res) => {
        const { db } = global
        const { title = 'No title', description = 'No description' } = req.body
        await db.query('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description])
        res.json({ success: true })
    })

    //TODO Add route to update and delete todos
})
