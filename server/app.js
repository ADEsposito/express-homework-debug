var express = require('express'),
    app     = express(),
    path    = require('path'),
    server  = require('http').createServer(app);

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'views'));

    app.use(express.static(path.join(__dirname, 'public')));


  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I the server finally works')
  })

// text message (one)
  app.get('/text1', function(req, res) {
    res.send('This is the first one')
  })

// handlebar (two different ones)
  app.get('/handlebar1', function(req, res) {
    res.render('handlebar1', {word: "this is a word"})
  })

  app.get('/handlebar2', function(req, res) {
    res.render('yy', {word: "this is a word as well"})
  })

  // json (two different ones)
  app.get('/json1', function(req, res) {
    var json = {
      "first": "yes",
      "second": "no"
    }
    res.json(json)
  })

  app.get('/json2', function(req, res) {
    var json = {
      "first": "no",
      "second": "yes"
    }
    res.json(json)
  })

// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening on port 5000')
})
