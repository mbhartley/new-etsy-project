$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

	//JQuery click event on my list items, reference to #gift (change in browser)
	$('#item-template').click(function(){
	     window.location=$(this).find("a").attr("href"); 
	     return false;
	 });

});

