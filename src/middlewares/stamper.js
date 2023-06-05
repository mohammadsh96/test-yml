function stamper(req, res, next) {
  req.stamper = new Date();
  next();
}
module.exports = stamper;