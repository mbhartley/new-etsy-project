var ItemModel = Backbone.Model.extend();

var ItemCollection = Backbone.Collection.extend({

	model: ItemModel,

	url: "https://api.etsy.com/v2/listings/active.js?keywords=monster,halloween,haunted,painting&limit=10&includes=Images&api_key=ahtl952zofhx1ml3jy1x34wq&callback=?",

	parse: function(response) {
	  return response.results;
	}
})






