var path = require('path')

module.exports = {
	getHome,
	getBlog
}

function getHome(req, res){
	res.render('home')
}

function getBlog(req, res) {
	res.render('blog', dummyBlog)
}

var dummyBlog = {
	id: 5,
	date: '5th of Never',
	title: 'Dummy Blog',
	text: '<p>This is a test<p>'
}
