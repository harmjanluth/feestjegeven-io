define [ "gmaps", "socket" ], ( gmaps, socket ) ->
 
	module = 

		set : ( id ) ->

			input = document.getElementById( id )

			# Return autocomplete
			autocomplete = new gmaps.maps.places.Autocomplete input, types: [ "geocode" ]

			# Trigger place changed search
			gmaps.maps.event.addListener autocomplete, 'place_changed', ->
				
				#trigger query
				place 	= autocomplete.getPlace()
				lat 	= place.geometry.location.lat()
				lng 	= place.geometry.location.lng()

				socket.query( latlng: [ lng, lat ], distance : 500  )

	init = ( options ) ->

		module

	init()