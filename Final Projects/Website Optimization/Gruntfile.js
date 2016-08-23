module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

       imagemin: {
    dynamic: {
        files: [{
            expand: true,
            ///cwd: 'images/',
            src: ['img/LinkedIn_Pic.jpg'],
            dest: 'img/build/'
            }]
        }
    }

    uglify: {
    build: {
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'
        }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin','uglify']);

};