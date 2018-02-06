var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
    asker: String,
    question: String,
    option: [{type: Schema.Types.ObjectId, ref: 'Option'}] 
    }, {timestamps: {created: 'created' }
});

var OptionSchema = new mongoose.Schema({
    _question: {type:Schema.Types.ObjectId, ref: 'Poll'},
    option: String,
    vote: Number
});

var Poll = mongoose.model('Poll', PollSchema);
var Option = mongoose.model('Option', OptionSchema);