var should = require('should')
  , i64    = require('../i64base.js')
  , a64    = i64.new()
;



describe('int()', function() {
    describe('no arguments', function() {
        it('returns 0', function() {
            var result = a64.int();
            should.exist(result);
            result.should.equal(0);
        });
    });

    describe('small integer', function() {
        var result;
        it('returns "mGW"', function() {
            result = a64.int(92858);
            should.exist(result);
            result.should.equal('mGW');
        });
        it('returns "92858"', function() {
            result = a64.int();
            should.exist(result);
            result.should.equal(92858);
        });
    });
});
