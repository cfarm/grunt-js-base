module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        precision: 5
      },
      dev: {
        options: {
          style: 'nested', // compact, compressed, nested or expanded
          sourcemap: true
        },
        files: {
          'stylesheets/css/styles.css' : 'stylesheets/scss/styles.scss'
        }
      },
      prod: {
        options: {
          style: 'compressed', // compact, compressed, nested or expanded
          sourcemap: true
        },
        files: {
          'stylesheets/css/styles.css' : 'stylesheets/scss/styles.scss'
        }
      }
    },

    uglify: {
      dev: {
        options: {
          beautify: true
        },
        files: {
          // Where to combine and minify JS files, followed by list of which files to include and exclude
          'js/script.min.js' : ['js/scripts/*.js', 'js/script.js', '!js/plugins/modernizr.js']
        }
      },
      prod: {
        files: {
          // Where to combine and minify JS files, followed by list of which files to include and exclude
          'js/script.min.js' : ['js/plugins/*.js', 'js/script.js', '!js/plugins/modernizr.js', '!js/plugins/livereload.js']
        }
      }
    },

    // Watch options: what tasks to run when changes to files are saved
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['stylesheets/scss/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['js/scripts/*.js', '!js/script.min.js'], // Watch for changes in JS files except for script.min.js to avoid reload loops
        tasks: ['uglify:dev']
      }
		}
	});

  grunt.registerTask('default', ['sass:dev','uglify:dev','watch']);
  grunt.registerTask('production', ['sass:prod','uglify:prod']);
};