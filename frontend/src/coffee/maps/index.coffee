define [ "gmaps", "maps/modules/index" ], ( gmaps, functions ) ->

	# shorter namespace, no need to type "google.maps" all the time
	
	module = 
		getHello : ->
			console.log "Hello World"

	init = ( options ) ->
		
		console.log "[maps initialized..]"

		# Setup AC field
		autocomplete = functions.autocomplete.set( "places-autocomplete" )
		
		# Return the module
		module

	# Listen to the Gmaps callback
	# 
	gmaps.maps.event.addDomListener( window, 'load', init() )