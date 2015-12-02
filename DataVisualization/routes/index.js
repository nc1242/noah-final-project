var express = require('express'), 
    router = express.Router(),
    passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

// NOTE: we'll need session support so that a user
// can remain logged in
var session = require('express-session');
var sessionOptions = {
  secret: 'secret cookie thang (store this elsewhere!)',
  resave: true,
  saveUninitialized: true
};
router.use(session(sessionOptions));
// END

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', function(req,res,next) {
  // NOTE: use the custom version of authenticate so that we can
  // react to the authentication result... and so that we can
  // propagate an error back to the frontend without using flash
  // messages
  passport.authenticate('local', function(err,user) {
    if(user) {
      // NOTE: using this version of authenticate requires us to
      // call login manually
      //console.log("1: ", req.body.username)
      req.logIn(user, function(err) {
        //console.log("2: ", req.body.username)
        //req.session.user_id = req.body.username
        res.redirect('/');
      });
    } else {
      res.render('login', {alert:'Your login or password is incorrect.'});
    }
  })(req, res, next);
  // NOTE: notice that this form of authenticate returns a function that
  // we call immediately! See custom callback section of docs:
  // http://passportjs.org/guide/authenticate/
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res) {
  User.register(new User({username:req.body.username}), 
      req.body.password, function(err, user){
    if (err) {
      // NOTE: error? send message back to registration...
      res.render('register',{alert:'Your registration information is not valid'});
    } else {
      // NOTE: once you've registered, you should be logged in automatically
      // ...so call authenticate if there's no error
        //console.log("2: ", req.body.username)
        passport.authenticate('local')(req, res, function() {
          //req.session.user_id = req.body.username
          //console.log("3: ", req.body.username)
          res.redirect('/');
        });
    }
  });   
});

router.use(function(req, res, next){
  if (req.isAuthenticated()){
    next()}
  else{
    res.render('index', {alert:'You must log in first.'});
  }

});

router.get('/logout', function(req, res) {
  //req.session.user_id = null
  req.logout()
  res.redirect('/')
});



module.exports = router;
