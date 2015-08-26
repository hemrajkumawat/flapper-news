var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
<<<<<<< HEAD
  votes: {type: Number, default: 0},
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

CommentSchema.methods.upvote = function(cb) {
  this.votes += 1;
  this.save(cb);
};

CommentSchema.methods.downvote = function(cb) {
  this.votes -= 1;
  this.save(cb);
}

mongoose.model('Comment', CommentSchema);
=======
  upvotes: {type: Number, default: 0},
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

mongoose.model('Comment', CommentSchema);
// module.exports = comment;
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
