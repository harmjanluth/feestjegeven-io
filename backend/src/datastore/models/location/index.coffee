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
	
	if query.pax
		filters.maximum_pax 	= $gte : query.pax
		filters.minimum_pax 	= $lte : query.pax

	if query.features
		filters.features		= $all : query.features

	LocationModel.collection.geoNear(
		query.latlng[0], 
		query.latlng[1],
		spherical 			: true
		maxDistance 		: query.distance / 6371
		distanceMultiplier	: 6371
		query				: filters
		, (err, docs) ->

			if err
				log.debug "[Error.. querying]", err
			else
				callback( docs )
	)


exports.get = ( alias, callback ) ->

	if alias

		LocationModel.findOne( alias : alias, (err, results ) ->

			callback( results )

		)