mongoose 			= require( "mongoose" )
mongo 				= require( "mongodb" )
schemas 			= roquire( "datastore/schemas" )
utils 				= roquire( "utils" )

# Setup model
LocationModel 		= mongoose.model "Location", schemas.location

# Module
exports.find = ( latlng, callback ) ->

	log.trace 	latlng

	LocationModel.geoNear latlng,
		maxDistance: 0.1 / 1000
		spherical: true
		, (err, results, stats) ->
			console.log "AA", results
			callback results