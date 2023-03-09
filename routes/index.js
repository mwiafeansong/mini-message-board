var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toUTCString(),
  },
  {
    text: 'Hello World',
    user: 'Charles',
    added: new Date().toUTCString(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

//GET new page
router.get('/new', function (req, res, next) {
  res.render('form');
});

//POST request
router.post('/new', function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date().toUTCString(),
  });

  res.redirect('/');
});

module.exports = router;
