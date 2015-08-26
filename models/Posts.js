var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
<<<<<<< HEAD
  votes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
  this.votes += 1;
  this.save(cb);
};

PostSchema.methods.downvote = function(cb) {
  this.votes -= 1;
  this.save(cb);
}

=======
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
mongoose.model('Post', PostSchema);