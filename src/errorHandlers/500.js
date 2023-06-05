function handler500(error, req, res, next) {
  res.status(500);
//   res.render('500', { error });
res.send({
    code: 500,
    route: req.path,
    msg: 'Server Error'
});
}
module.exports = handler500;