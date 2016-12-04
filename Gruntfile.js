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
                    foo : true,
                    origin : 'https://github.com/helyes/grunt-buildinfo.git'
                },
                files: {
                    'test/data/out/dest.json' : ['test/data/*.json']
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
            src: ['test/buildinfo_spec.js'],
            test: {
                src: ['test/buildinfo_spec.js']
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
        'mochaTest'
    ]);

    grunt.registerTask('devtest', ['watch:test']);
};
