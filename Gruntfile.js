module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: { /// UGLIFY - minimizes and combines js files. all {src} files into {dest}.
			dist: {
				src: ['library/js/libs/modernizr-2.6.2-respond-1.1.0.min.js', "library/js/libs/slick/slick.js", 'library/js/scripts.js'],
				dest: 'library/js/global.min.js'
			},
			build: {
				src: ['library/js/libs/modernizr-2.6.2-respond-1.1.0.min.js', "library/js/libs/slick/slick.js", 'library/js/scripts.js'],
				dest: 'mb-build/library/js/global.min.js'
			}
		},
		svgmin: { /// SVG MIN - MINIMIZES SVG FILES IN THE {images} FOLDER AND PUTS THEM IN THE {img} FOLDER
			options: {
				plugins: [
					{ removeViewBox: true },
					{ removeUselessStrokeAndFill: true },
					{ removeEmptyAttrs: false }
				]
			},
			dist: {                     // Target
				files: [{               // Dictionary of files
					expand: true,       // Enable dynamic expansion.
					cwd: 'library/images',     // Src matches are relative to this path.
					src: ['*.svg'],  // Actual pattern(s) to match.
					dest: 'library/img/',       // Destination path prefix.
					ext: '.min.svg'     // Dest filepaths will have this extension.
					// ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
				}]
			}
		},
	    "svg-sprites": { /// MAKES SVG SPRITES AND CSS CLASSES
	        options: {
	            spriteElementPath: "library/images",
	            spritePath: "library/img/sprites",
	            cssPath: "library/scss",
	            cssSuffix: "scss",
	            cssPrefix: "_sprite",
	            prefix: "",
	        },
	        icon: {
	            options: {
	                sizes: {
	                    large: 39,
	                    small: 13
	                },
	                refSize: 26,
	                unit: 13
	            }
	        }
	    },
		imagemin: {  /// IMAGEMIN - optimizes all source images {cwd} and spits them into {dest}.
			dynamic: {
				files: [{
					expand: true,
					cwd: 'library/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'library/img/'
				}]
			}
		},
		imageoptim: {
		  myTask: {
		    options: {
		      jpegMini: false,
		      imageAlpha: true,
		      quitAfter: true
		    },
		    src: ['library/img/', 'library/img/*/']
		  }
		},
		sass: { /// SASS - for PreProcessing
			dist: {
				options: {
					style: 'expanded',
					sourcemap: true
				},
				files: {
					'library/css/style.css': 'library/scss/style.scss',       // 'destination': 'source'
				}
			},
			build: {
				options: {
					style: 'compressed',
					sourcemap: false
				},
				files: {
					'mb-build/library/css/style.css': 'library/scss/style.scss',       // 'destination': 'source'
				}
			}
		},
		watch: { /// WATCH - watches files and performs tasks when there are changes
				src: {
					files: ['library/js/*/*.js', 'library/scss/*.scss', '*.html'],
					tasks: [ 'sass:dist','autoprefixer:dist', 'uglify:dist'],
					options: {
						livereload: true,
						sourceComments: 'normal'
						},
				},
		},
		autoprefixer: { /// AUTOPREFIXER
				dist: {
					files: {
						'library/css/style.css': 'library/css/style.css',
						},
						options: {
							browsers: ['last 3 versions']
						},
				},
				build: {
					files: {
						'mb-build/library/css/style.css': 'library/css/style.css',
						},
						options: {
							browsers: ['last 3 versions']
						},
				}
		},
		cmq: {
			dist: {
				options: {
					log: false
				},
				your_target: {
					files: {
					'library/css/build/': ['library/css/build/*.css']
					}
				}
			},
			build: {
				options: {
					log: false
				},
				your_target: {
					files: {
					'mb-build/library/css/': ['mb-build/library/css/*.css']
					}
				}
			},
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'mb-build/library/css/',
				src: ['*.css'],
				dest: 'mb-build/library/css/',
			},
			options: {
				keepSpecialComments: 0,
			}
		},
		copy: { /// THIS IS THE PART OF THE BUILD PROCESS THAT COPIES THE NEEDED FILES TO THE NEW BUILD FOLDER THEME. YOU JUST UPLOAD THAT THEME SINCE IT HAS ONLY THE FILES THAT ARE NEEDED
		  main: {
		    files: [
		      {expand: true, src: ['*.html','*.ico', '*.png', '*.css'], dest: 'mb-build/', filter: 'isFile'},
 		      {expand: true, flatten: true, src: ['library/*.html'], dest: 'mb-build/library/', filter: 'isFile'},
 		      {expand: true, flatten: true, src: ['library/img/**'], dest: 'mb-build/library/img/', filter: 'isFile'},
 		      {expand: true, cwd: 'library/img/', src: ['**'], dest: 'mb-build/library/img/'},

		    ]
		  }
		}


	}); // END CONFIG

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-dr-svg-sprites');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-imageoptim');

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-copy');
	// Default task(s).
	grunt.registerTask('build', ['uglify:build', 'sass:build', 'autoprefixer:build', 'cmq:build', 'cssmin', 'svgmin', 'svg-sprites', 'imagemin', 'imageoptim','copy']);


};