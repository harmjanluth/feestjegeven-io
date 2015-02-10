# Initialize
mongoose 			= require( "mongoose" )
mongo 				= require( "mongodb" )

# Setup globals
uristring 			= process.env.MONGOLAB_URI or "mongodb://localhost/golden-slumbers"

# Setup mongo(ose) database
mongoose.connect uristring, ( error, response ) ->
	
	if error
		log.error "error connecting to: " + uristring + ": " + error
	else
		log.info "datastore connected to: " + uristring