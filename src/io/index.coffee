datastore 			= roquire( "datastore" )
utils 				= roquire( "utils" )
io 					= null

exports.init = ( server ) ->

	# connect
	io = require( "socket.io" ).listen( server )

	# Setup socket.io
	io.on "connection", ( socket ) ->

		# Send ready trigger
		socket.emit "ready", {}

		socket.on "query", (q) ->

			datastore.find q, ( data ) ->

				console.log "DSAASDADS", data


	

				