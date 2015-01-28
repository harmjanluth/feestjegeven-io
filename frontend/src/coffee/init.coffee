define [ "json!config" ], ( config ) ->


	console.log window.location.href
	console.log config.urls.base_path
	
	path = window.location.pathname

	# Check if we can abstract base_url
	if config.urls.base_path
		
		if window.location.href.indexOf( config.urls.base_path ) > -1

			path = window.location.href.split( config.urls.base_path )[1]

	# Setup starts with function
	# 
	String::startsWith = ( str ) ->
		value = @ + ""
		value.indexOf( str ) > -1

	if path is ( "" or "/" )

		places = require( [ "places" ] )

	else if path.startsWith( "/feestlocatie:" )

		alert 200

	else

		alert 404		

	return