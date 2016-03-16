module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

            //package json containing needed Grunt plugins
            pkg: grunt.file.readJSON('package.json'),

            //require js configuration
            requirejs: {
                build: {
                    options: {
                        baseUrl: "js",
                        mainConfigFile: "js/main.js",
                        name: "almond", //using almond plugin to generate deliverable
                        include: ["fx/App"],
                        wrap: {
                            "startFile": "js/wrap.start", //wrapping before deliverable
                            "endFile": "js/wrap.end" //wrapping after deliverable
                        },
                        optimize: 'none', // none / uglify2
                        "out": "build/FxCalculator.js"
                    }
                }
            },

            //small tidy up task
            clean: {
                start: [
                    'build/*'
                ]
            }
        }
    );

    //loading required npm modules
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', [
        'clean:start',
        'requirejs:build'
    ]);

};