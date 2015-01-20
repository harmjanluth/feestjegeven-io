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