module.exports = function(grunt) {

    grunt.initConfig({

        eslint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'test/*.js'
            ]
        },

        'buildinfo': {
            test: {
                options: {
                    origin : 'https://github.com/helyes/grunt-buildinfo.git'
                }
            }
        },

        clean : {
            options: {
                force : true
            },
            test: ['test/data/out/*']
        },

        mochaTest: {
            options: {
                reporter: 'spec'
            },
            test: {
                src: ['test/*spec.js']
            }
        },
        watch : {
            test: {
                files : ['tasks/*.js', 'test/*_spec.js'],
                tasks:  ['test'],
                options: {
                    debounceDelay: 2000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.loadTasks('tasks');


    grunt.registerTask('test', [
        'clean:test',
        'eslint',
        'buildinfo:test',
        'mochaTest:test'
    ]);

    grunt.registerTask('devtest', ['watch:test']);
};
