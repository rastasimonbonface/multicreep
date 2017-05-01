module.exports = function (apiRouter, pink) {
apiRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
}
