module.exports = function (frontRouter, pink) {

frontRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
})
.get('/instagram', function(req, res, next) {
  res.render('instagram', { title: 'Instagram' });
})
.get('/claire', function(req, res, next) {
  res.render('claire', { title: 'Claire' });
})
.get('/image', function(req, res, next) {
  res.render('img', { title: 'Img' });
})
}
