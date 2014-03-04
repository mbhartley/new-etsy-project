var ItemView = Backbone.View.extend({
  
  createTemplate: _.template($('#item-template').text()),

  initialize: function(){                	
  	$('.item-list').append(this.el);    
    this.render()
  },

  render: function(){													    
    this.$el.html(this.createTemplate(this.model));
  }

})

  

  
