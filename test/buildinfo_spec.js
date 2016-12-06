/*eslint no-console: "warn"*/
var describe = require('mocha').describe;
var it       = require('mocha').it;
var expect   = require('chai').expect;
var grunt    = require('grunt');
var os = require('os');

describe('buildinfo', function(){

    describe('test if all properties populated', function(){
        var buildinfo = grunt.config.get('buildinfo');

        it('should have added by', function(){
          //  grunt.log.debug('Test config: ', grunt.config.get('buildinfo'));
            expect(buildinfo.by).to.be.equal(process.env.USER);
        });

        it('should have added host', function(){
            expect(buildinfo.host).to.be.equal(os.hostname());
        });

        it('should have added at - build timestamp (!! not null check only atm)', function(){
            //lets play around that later
            expect(buildinfo.at).to.not.be.undefined;
            expect(buildinfo.at).to.not.be.null;
            expect(buildinfo.at).length.to.be.above(1);
        });

        it('should have added os', function(){
            expect(buildinfo.os.type).to.be.equal(os.type());
            expect(buildinfo.os.release).to.be.equal(os.release());
            expect(buildinfo.os.arch).to.be.equal(os.arch());

        });

    });
});
