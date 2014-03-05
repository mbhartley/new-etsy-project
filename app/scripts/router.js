var MainRouter = Backbone.Router.extend({

//my list view is to show on the home page and include a title and price of the etsy item
//my item view will appear to the right of the list view, by clicking on the item in the item view
//it will add an image and price and description

  routes: {
	"" : "itemView", 						    //itemView is the default or homepage view and includes
	"gift" : "giftView" 					    //the list of etsy items; giftView is an image and description
  },											//of the gift that will appear in the jumbotron div
										
  initialize: function(){
	this.etsyFeed = new ItemCollection;			//i only need to instantiate the new ItemCollection
    this.etsyFeed.fetch();
  },											//one time, b/c i will draw data from a single   
  		     	                                //collection for each of the 2 views  

  itemView: function(){
  	this.etsyFeed.on('add', function(item){
  	  new ItemView({model: item});				//THEN, i run the model object through the ItemView
  	})													
  },											

  giftView: function(){
  	//this.giftFeed.on('add', function(item){
    new GiftView({model: item});                
  	//})										//THIS IS WHAT I HOPED FOR:
  }					                            //run the model object through the GiftView
	                                            //this should happen when the 'list-container' div is clicked	    										 						
})												//THIS IS WHAT I GOT:
  												//error: item is not defined; if i remove the object {model: item}
  												//and pass no argument, i get errors thrown regarding my template in
  												//my HTML document; so, removal of the object means the view is being
  												//instantiated, but then it breaks down at the level of the actual
  												//rendering of the page; i don't believe it is actually a problem with 
  												//my template set up, b/c no amount of effort at that level helped.
  												//my gut tells me that there is something wrong with the way I am 
  												//instantiating my GiftView and/or passing in the object {model: item}

