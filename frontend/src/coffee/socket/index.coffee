define [ "socketio", "views", "json!config" ] , ( io, views, config ) ->
	
	socket = null

	module = 
		
		query : ( query ) ->
			socket.emit( "query", query )

	init = ( options ) ->
		
		socket = io.connect( config.urls.socket )
		
		socket.on "ready", () ->
			console.log "[socket initialized..]"

		socket.on "result", ( data ) ->
			
			views.showSearchResults( data )


		
		# Return the module
		module

	init()