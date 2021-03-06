# Setup better require
global.roquire = (name) ->
  require __dirname + "/" + name

# Initialize
app 				= require( "express" )()
server				= require( "http" ).Server( app )

# Global
io 					= require( "./io" ).init( server )
utils 				= require( "./utils" )

log4js 				= require( "log4js" )
global.log 			= log4js.getLogger()

base_directory		= if process.env.IS_HEROKU then ( process.cwd() + "/build" ) else __dirname

# Set port (heroku)
app
	.set "port", ( process.env.PORT or 5000 )
	#.get "/", ( request, response ) ->
		#response.sendFile( __dirname + "/client.html" )

# Serve app
server.listen app.get( "port" ), ->
	
	log.info "app running on :" + app.get( "port" )