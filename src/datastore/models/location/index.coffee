mongoose 			= require( "mongoose" )
mongo 				= require( "mongodb" )
schemas 			= roquire( "datastore/schemas" )
utils 				= roquire( "utils" )

# Setup model
LocationModel 		= mongoose.model "Location", schemas.location

# Module
exports.find = ( query, callback ) ->

	LocationModel.geoNear query.latlng,
		distanceMultiplier	: 6371
		maxDistance 		: query.distance / 637.1
		spherical			: true
		, (err, results, stats) ->
			
			callback( results )