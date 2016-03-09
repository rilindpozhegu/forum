module.exports = function(grunt) {

  // Project configuration.
 grunt.initConfig({
  concat_css: {
    options: {
      // Task-specific options go here. 
    },
    all: {
      src: ["index.css", ],
      dest: "styles.css"
    },
  },
})

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-concat-css');

   grunt.registerTask('default', ['concat_css']);

};
 