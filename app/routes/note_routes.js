/**
 * Created by Antonina on 04.12.2017.
 */
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    app.get('/reviews/:id', function(req, res){
        const details = { '_id': new ObjectID(id) };
        db.collection('reviews').findOne(details, function(err, item) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
    }
    });
    });
    app.post('/reviews', function(req, res) {
        const review = { text: req.body.text, name: req.body.name };
        db.collection('reviews').insert(review, function(err, result){
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/reviews/:id', function(req, res){
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('reviews').remove(details, function(err, item){
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Review ' + id + ' deleted!');
            }
        });
    });
    app.put('/reviews/:id', function(req, res){
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('reviews').update(details, note, function(err, result){
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(note);
            }
        });
    });
};