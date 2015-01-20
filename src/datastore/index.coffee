# DATASTORE

# Initialize
connect 				= require( "./connect" )
location 				= require( "./models/location" )

exports.find = ( nid, callback ) ->

	
	location.find( nid, ( data ) ->

		log.trace data

	)
