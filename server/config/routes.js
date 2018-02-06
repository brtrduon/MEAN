var mongoose = require('mongoose');
var path = require('path');
var Poll = mongoose.model('Poll');
var Option = mongoose.model('Option');

var polls = require('../controllers/polls.js');


module.exports = function(app) {

    app.get('/polls', function(req, res) {
        polls.getAllPolls(req, res);
    });

    app.post('/question', function(req, res) {
        polls.addQuestion(req, res);
    });

    app.post('/options', function(req, res) {
        polls.addOptions(req, res);
    });

    app.get('/onepoll/:id', function(req, res) {
        polls.getOnePoll(req, res);
    })

    app.post('/vote', function(req, res) {
        polls.vote(req, res);
    })

    app.post('/delete', function(req, res) {
        polls.delete(req, res);
    })

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    });

}