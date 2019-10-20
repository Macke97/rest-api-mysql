const router = require('express').Router()

// Get todo by id
router.get('/:id', async (req, res) => {
    const { db } = global
    const { id } = req.params
    const result = await db.query('SELECT * FROM todos WHERE id = ?', [id])
    if (result.length) {
        res.json(result)
    } else {
        res.status(404).send('Not found')
    }
})

module.exports = router
