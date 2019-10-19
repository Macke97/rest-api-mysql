module.exports = (req, res, next) => {
    if (!req.body || !Object.keys(req.body).length) {
        res.status(400).send('Empty or no body!')
    } else {
        next()
    }
}
