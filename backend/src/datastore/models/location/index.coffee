mongoose 			= require( "mongoose" )
mongo 				= require( "mongodb" )
schemas 			= roquire( "datastore/schemas" )
utils 				= roquire( "utils" )

# Setup model
LocationModel 		= mongoose.model "Location", schemas.location

# Module
exports.find = ( query, callback ) ->

	query.features = [ "Bereikbaar per boot", "Invalidentoegankelijk", "Tuin" ]

	# New filters
	filters 					= {}

	# Set pax
	if query.pax
		filters.maximum_pax 	= $gte : query.pax
		filters.minimum_pax 	= $lte : query.pax

	if query.features
		filters.features		= $all : query.features

	# Execute query
	LocationModel.geoNear query.latlng,
		distanceMultiplier	: 6371
		maxDistance 		: query.distance / 6371
		spherical			: true
		,
		query :
			filters
		, (err, results, stats) ->
			
			callback( results )