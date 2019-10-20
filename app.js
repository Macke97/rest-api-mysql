const boot = require('./boot')
const { checkIfBodyExists } = require('./middlewares')
const todoRoutes = require('./routes/todo')

boot().then(app => {
    app.use('/todo', todoRoutes)

    // Get all todos
    app.get('/todos', async (req, res) => {
        const { db } = global
        const result = await db.query('SELECT * FROM todos')
        res.json(result)
    })

    // Add a todo
    app.post('/todos', checkIfBodyExists, async (req, res) => {
        const { db } = global
        const { title = 'No title', description = 'No description' } = req.body
        await db.query('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description])
        res.json({ success: true })
    })

    //TODO Add route to update and delete todos

    app.put('/todo/:id', (req, res) => {
        const { db } = global
        const { id } = req.params
        const { title } = req.body
        if (!title) {
            res.status(400).send('No title')
        }
        db.query('UPDATE todos SET title = ? WHERE id = ?', [title, id])
            .then(result => {
                res.json(result)
            })
            .catch(() => {
                res.status(400).send('Failed to update')
            })
    })
})
