var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var routes = require('./routes')

var server = express()

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))

// Routes
server.get('/', routes.getHome)
server.get('/blog', routes.getBlog)

module.exports = server
