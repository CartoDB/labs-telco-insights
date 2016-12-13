// Load Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'index.dev.html'         // 'destination': 'source'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'deep-insights.js/dist/deep-insights.compressed.js': ['deep-insights.js/dist/deep-insights.uncompressed.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    }

  });
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');

  // Register Grunt tasks
  grunt.registerTask('default', ['htmlmin', 'uglify', 'cssmin']);
};