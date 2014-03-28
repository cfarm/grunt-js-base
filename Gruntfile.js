module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        precision: 5,
        style: 'nested', // compact, compressed, nested or expanded
      },
      dev: {
        options: {
          sourcemap: true
        },
        files: {
          'a/c/screen.css' : 'a/c/screen.scss'
        }
      },
      prod: {
        files: {
          'a/c/screen.css' : 'a/c/screen.scss'
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
          'a/j/script.min.js' : ['a/j/plugins/*.js', 'a/j/script.js', '!a/j/plugins/modernizr.js']
        }
      },
      prod: {
        files: {
          // Where to combine and minify JS files, followed by list of which files to include and exclude
          'a/j/script.min.js' : ['a/j/plugins/*.js', 'a/j/script.js', '!a/j/plugins/modernizr.js', '!a/j/plugins/livereload.js']
        }
      }
    },

    // Watch options: what tasks to run when changes to files are saved
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['a/c/**/*.scss'],
        tasks: ['compass'] // Compile with Compass when Sass changes are saved
      },
      js: {
        files: ['a/j/**/*.js', '!a/j/script.min.js'], // Watch for changes in JS files except for script.min.js to avoid reload loops
        tasks: ['uglify:dev']
      }
		}
	});

  grunt.registerTask('default', ['sass:dev','uglify:dev','watch']);
  grunt.registerTask('production', ['sass:prod','uglify:prod']);
};