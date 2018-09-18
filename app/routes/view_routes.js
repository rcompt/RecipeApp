
var path = require('path');

module.exports = function(app, db) {
  app.get('*', function(req, res) {
    res.sendfile('sample.html', {root: './public'});
  })
};
