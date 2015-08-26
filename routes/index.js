<<<<<<< HEAD
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var passport = require('passport');
var User = mongoose.model('User');
var jwt = require('express-jwt');

//Create a middleware for authenticating jwt tokens
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){
      return next(err);
    }
    res.json(posts);
  });
});

router.post('/posts', auth, function(req, res, next) {
  var post = new Post(req.body);
  post.author = req.payload.username;
  post.save(function(err, post){
    if(err) {
      return next(err);
    }
    res.json(post);
  });
});

=======
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});
router.post('/posts', function(req, res, next) {
  var post = new Post(req.body);
  console.log(post);
  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
});
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function (err, post){
    if (err) { return next(err); }
<<<<<<< HEAD
    if (!post) { return next(new Error("can't find post")); }
=======
    if (!post) { return next(new Error('can\'t find post')); }
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c

    req.post = post;
    return next();
  });
});
<<<<<<< HEAD

router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);

  query.exec(function (err, comment){
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }

    req.comment = comment;
    return next();
  });
});

router.get('/posts/:post', function(req, res, next) {
  req.post.populate('comments', function(err, post) {
    res.json(post);
  });
});

router.put('/posts/:post/upvote', auth, function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }
    res.json(post);
  });
});

router.put('/posts/:post/downvote', function(req, res, next) {
  req.post.downvote(function(err, post){
    if (err) { return next(err); }
    res.json(post);
  });
});

router.post('/posts/:post/comments', auth, function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;
  comment.author = req.payload.username;

  comment.save(function(err, comment){
    if(err){ return next(err); }

    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if(err){ return next(err); }

      res.json(comment);
    });
  });
});

router.put('/posts/:post/comments/:comment/upvote', auth, function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});

router.put('/posts/:post/comments/:comment/downvote', function(req, res, next) {
  req.comment.downvote(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});
// router for the register user.
router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.username = req.body.username;

  user.setPassword(req.body.password)

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});
// route for checking login details
router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields of the form'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
=======
router.get('/posts/:post', function(req, res) {
  res.json(req.post);
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
});
module.exports = router;