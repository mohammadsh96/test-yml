function Handler404(req, res, next) {
res.status(404).send({
    code: 404,
    route: req.path,
    msg: 'Not Found'

})
}
module.exports = Handler404;