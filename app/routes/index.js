/**
 * Created by Antonina on 04.12.2017.
 */

const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
    noteRoutes(app, db);
};

