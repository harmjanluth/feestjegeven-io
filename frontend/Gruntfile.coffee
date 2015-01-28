module.exports = (grunt) ->

	# Project configuration.
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		coffee:
			compile:
				options:
					join: true
					bare: true
				expand: true
				flatten : false
				cwd: 'src/coffee'
				src: ['**/*.coffee']
				dest: 'build/js'
				ext: '.js'
		sass:
			compile:
				files:
					'build/css/main.css' : 'src/sass/main.sass'
		watch:
			app:
				files: [ '**/*.coffee', '**/*.sass', 'index.html' ]
				tasks: [ 'coffee', 'sass', 'copy' ]
				options:
						livereload: true
		copy:
			main:
				expand: true
				cwd: 'src'
				dest: 'build'
				src: [ 'img/**/*', 'lib/**/*', 'templates/**/*', 'index.html', '.htaccess' ]

	# These plugins provide necessary tasks.
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-copy'
		
