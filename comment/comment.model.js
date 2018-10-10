const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User' },
    content: String
});


module.exports = mongoose.model('Comment', commentSchema);