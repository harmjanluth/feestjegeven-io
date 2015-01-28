define [ 
	"hogan", 
	"text!../templates/searchResults.html" 
] , ( hogan, searchResultsTpl ) ->
	
	module = 
		
		showSearchResults : ( data ) ->

			template 	= Hogan.compile( searchResultsTpl )
			output 		= template.render( locations : data )

			document.getElementById( "result" ).innerHTML = output

	init = ( options ) ->
		
		# Return the module
		module

	init()