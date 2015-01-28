# DATASTORE

# Initialize
connect 				= require( "./connect" )
location 				= require( "./models/location" )

exports.find = ( query, callback ) ->

	
	location.find( query, ( result ) ->

		callback( result )

	)
