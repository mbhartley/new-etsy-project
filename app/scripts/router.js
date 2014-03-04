var MainRouter = Backbone.Router.extend({

	routes: {
		"" : "homePage"
	},

initialize: function(){
	this.monsters = new ItemCollection;
	this.monsters.on('add', function(item){
		new ItemView({model: item})
	})
},

homePage: function(){
	this.monsters.fetch();

  }
})