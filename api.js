var express 	= require('express'),
	bourne		= require('bourne'),
	bodyParser	= require('body-parser'),

	db			= new bourne('data.json'),
	router		= express.Router();

	router
		.use(function (req, res, next){
			if(!req.user) req.user = { id: 1}
			next();

		})
		.use(bodyParser.json())
		.route('/news')
			.get(function(req, res) {
				db.find(function(err, data){
					res.json(data);

				});
			})

			.post(function(req, res){
				var article = req.body;
				article.authorId = req.user.id;

				db.insert(article, function(err, data){
					res.json(data);
				});

			});

	router
		.param('id', function(req, res, next){
			req.dbQuery = { id: parseInt(req.params.id, 10) };
			next();

		})
		.route('/news/:id')
		.get(function(req, res){
			db.findOne(req.dbQuery, function(err, data){
				res.json(data);
			});
		})

module.exports = router;
