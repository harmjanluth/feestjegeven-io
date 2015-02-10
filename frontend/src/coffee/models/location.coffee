define [ "socket" ], ( socket ) ->
	
	module = 
		
		get : ( alias ) ->

			# Rewrite old URL
			alias = "feestlocatie/" + alias

			socket.getLocation alias

	init = ( options ) ->
		
		# Return the module
		module

	init()