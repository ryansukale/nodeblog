var articleCounter = 1;
ArticleProvider.provider.dummyData  [];

var _ = require('./public/js/underscore');

ArticleProvider.prototype.findAll = function(callback){
	callback(null,this.dummyData);
}

ArticleProvider.prototype.findById = function(callback){
	var result = null;
	
	callback(null, result);
}

/* Lets bootstrap with dummy data */
new ArticleProvider().save([
  {title: 'Post one', body: 'Body one', comments:[{author:'Bob', comment:'I love it'}, {author:'Dave', comment:'This is rubbish!'}]},
  {title: 'Post two', body: 'Body two'},
  {title: 'Post three', body: 'Body three'}
], function(error, articles){});


module.exports.ArticleProvider = ArticleProvider;