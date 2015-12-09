'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.delete_invalid_images = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  custom: function(test) {
    test.expect(1);
    var actual = grunt.file.expand('test/fixtures/**/*.*');
    var expected = grunt.file.expand('test/expected/**/*.*');
    actual = actual.map(function(v){
      return v.substring(v.lastIndexOf('/')+1);
    }).sort().join('');
    expected = expected.map(function(v){
      return v.substring(v.lastIndexOf('/')+1);
    }).sort().join('');
    test.equal(actual,expected,'test not pass！'); 
    test.done();
  },
};
