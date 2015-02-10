# DATASTORE

# Initialize
connect 				= require( "./connect" )
location 				= require( "./models/location" )

exports.find = ( query, callback ) ->

	
	location.find( query, ( result ) ->

		callback( result )

	)


exports.getLocation = ( alias, callback ) ->

	location.get( alias, ( result ) ->

		callback( result )

	)
