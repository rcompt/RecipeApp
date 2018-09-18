const noteRoutes = require('./note_routes');
const viewRoutes = require('./view_routes');

module.exports = function(app,db){
  noteRoutes(app, db);
  viewRoutes(app, db);
  // Other route groups could go here, in the future

};
