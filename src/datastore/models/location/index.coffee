mongoose 			= require( "mongoose" )
mongo 				= require( "mongodb" )
schemas 			= roquire( "datastore/schemas" )
utils 				= roquire( "utils" )

# Setup model
LocationModel 		= mongoose.model "Location", schemas.location



# Module
exports.find = ( latlng, callback ) ->


	LocationModel.geoNear latlng,
		maxDistance: 300
		spherical: true
		, (err, results, stats) ->
			console.log results