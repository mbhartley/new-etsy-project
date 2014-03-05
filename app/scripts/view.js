var ItemView = Backbone.View.extend({
  
  itemTemplate: _.template($('#item-template').text()),

  initialize: function(){                	
  	$('.item-list').append(this.el);    
    this.render()
  },

  render: function(){													    
    this.$el.html(this.itemTemplate(this.model));
  },  
})

var GiftView = Backbone.View.extend({

  giftTemplate: _.template($('#gift-template').text()),  

  initialize: function(){
  	console.log('giftView initializedddd')
  	$('.display-gift').append(this.el);
  	this.render()
  },

  render: function(){
    console.log('render render render')
  	this.$el.html(this.giftTemplate(this.model));
  }

})



  

  
