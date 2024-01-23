const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log("hello from middleware 1")
    next();
});

app.use(express.static('./public'));

app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.render("index",{Maham:"MT"} )
});

app.get('/profile', function (req, res) {
    res.render("profile")
});
app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`)
});
app.get('/error', function (req, res, next) {
    throw Error("Something went wrong")
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(5000)

