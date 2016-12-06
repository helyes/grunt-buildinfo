/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "done" }]*/

module.exports = function(grunt) {

    var os = require('os');


    /**
     * Register the Grunt task buildinfo
     */
    grunt.registerMultiTask('buildinfo', 'Populates build details into grunt.buildinfo config', function() {

        var done    = this.async();

        //var options = this.options();
        //grunt.log.debug('Options: ', options);
        //grunt.log.debug('Buildinfo1: ', grunt.config.get('buildinfo'));

        var buildProperties = {
            buildinfo : {
                by : process.env.USER,
                host: os.hostname(),
                at: '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>',
                os: {
                    type: os.type(),
                    release: os.release(),
                    arch: os.arch()
                }
            }
        };

        grunt.config.merge(buildProperties);
        //grunt.log.debug('Buildinfo: ', grunt.config.get('buildinfo'));


        grunt.log.ok('Done. Buildinfo extended');
        //     grunt.fail.warn('Oooops');

        done();
    });
};
