var ItemModel = Backbone.Model.extend({
	idAttribute: "listing_id",
});

var ItemCollection = Backbone.Collection.extend({

  model: ItemModel,

  url: "https://api.etsy.com/v2/listings/active.js?keywords=jewelry,bacon&limit=25&includes=Images&api_key=ahtl952zofhx1ml3jy1x34wq&callback=?",

  parse: function(response) {
	  return response.results;
  }

})

