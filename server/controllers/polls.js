var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var Option = mongoose.model('Option');

module.exports = {
    getAllPolls: function(req,res){
        Poll.find({}, function(err, polls){
            if(err){
                console.log(err);
            } else {
                res.json(polls);
            }
        })
    },

    getOnePoll: function(req, res){
        Poll.findOne({_id: req.params.id}).populate('option').exec(function(err, poll){
            console.log('pewp');
            if (poll == null) {
                Poll.findOne({question: req.params.id}).populate('option').exec(function(err, poll){
                    res.json(poll);
                })
            } else {
            res.json(poll);
            }
        })
    },

    addQuestion: function(req, res){
        var poll = new Poll({asker: req.body.asker, question: req.body.question});
        poll.save(function(err){
            if (err){
                console.log(err);
            } else {
                console.log('Poll added!');
            }
        })
    },

    vote: function(req, res){
        Option.findById(req.body.id, function(err, option){
            if(err){
                console.log(err);
            } else {
                option.vote += 1;
                option.save();
            }
        })
    },

    delete: function(req, res) {
        Poll.remove({_id: req.body.id}, function(err){
            if (err){
                console.log(err);
            }
        });
    },

    addOptions: function(req, res){
        Poll.findOne({question: req.body.question}, function(err, question){
            if (err){
                console.log(err);
            } else {
            var option1 = new Option({_question: question._id, option: req.body.option1, vote: 0});
            
            option1.save(function (err){
                if (err) {
                    console.log(err);
                } else {
                    question.option.push(option1);
                    question.save(function(err){
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('option 1 added');
                            var option2 = new Option({_question: question._id, option: req.body.option2, vote: 0});
                            option2.save(function (err){
                                if (err) {
                                    console.log(err);
                                } else {
                                    question.option.push(option2);
                                    question.save(function(err){
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            console.log('option 2 added');
                                            var option3 = new Option({_question: question._id, option: req.body.option3, vote: 0});
                                            option3.save(function (err){
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    question.option.push(option3);
                                                    question.save(function(err){
                                                        if (err) {
                                                            console.log(err);
                                                        } else {
                                                            console.log('option 3 added');
                                                            var option4 = new Option({_question: question._id, option: req.body.option4, vote: 0});
                                                            option4.save(function (err){
                                                                if (err) {
                                                                    console.log(err);
                                                                } else {
                                                                    question.option.push(option4);
                                                                    question.save(function(err){
                                                                        if (err) {
                                                                            console.log(err);
                                                                        } else {
                                                                            console.log('option 4 added');
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })


        }
        })
    }
}