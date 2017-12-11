/**
 * Created by Antonina on 11.12.2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    date: String,
    author: String,
    text: String
});

var PostSchema2 = new Schema({
    img: String,
    name: String,
    text: String
});

module.exports = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post2', PostSchema2);