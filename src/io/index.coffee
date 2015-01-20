datastore 			= roquire( "datastore" )
utils 				= roquire( "utils" )
io 					= null

exports.init = ( server ) ->

	# connect
	io = require( "socket.io" ).listen( server )

	# Setup socket.io
	io.on "connection", ( socket ) ->
		
		log.info "[socket.io intialized]", socket.id

		# Send ready trigger
		socket.emit "ready", {}