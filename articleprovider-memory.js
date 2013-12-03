var articleCounter = 1;
ArticleProvider = function(){};
ArticleProvider.prototype.dummyData = [];


var _ = require('underscore');

ArticleProvider.prototype.findAll = function(callback){
	callback(null,this.dummyData);
}

ArticleProvider.prototype.findById = function(id,callback){

	var result = null;
	result = _.findWhere(this.dummyData, {_id: id});
	callback(null, result);
	
}

ArticleProvider.prototype.save = function(articles, callback){
	
	var that=this;
	//If only a single article is provided, create an array out of it
	if(typeof(articles.length)==="undefined"){
		articles = [articles];
	}
	
	_.each(articles,function(article, index, articles){
		article._id = articleCounter++;
		article.created_at = new Date();
		
		if( article.comments === undefined )
      article.comments = [];
			
		_.each(article.comments, function(commentElement, commentIndex, comments){
			commentElement.created_at = new Date();
		});
		
		that.dummyData[that.dummyData.length]= article;
		
	});
	
	callback(null, articles);
	
}


/* Lets bootstrap with dummy data */
new ArticleProvider().save([
  {title: 'Post one', body: 'Body one', comments:[{author:'Bob', comment:'I love it'}, {author:'Dave', comment:'This is rubbish!'}]},
  {title: 'Post two', body: 'Body two'},
  {title: 'Post three', body: 'Body three'}
], function(error, articles){});

console.log('ArticleProvider Setup Complete');
module.exports.ArticleProvider = ArticleProvider;