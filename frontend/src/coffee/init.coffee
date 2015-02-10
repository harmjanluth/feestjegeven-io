define [ "json!config", "models/location" ], ( config, location ) ->

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

	# Homepage
	# 
	if path is ( "" or "/" )

		places = require( [ "places" ] )

	# Detail location
	# 
	else if path.startsWith( "/feestlocatie:" )

		alias = path.split( "/feestlocatie:" ).pop()
		location.get( alias )

	else

		alert 404		

	return