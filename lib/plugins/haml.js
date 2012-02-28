(function() {

  module.exports = {
    source: 'haml',
    target: 'html',
    compile: function compile(code, options, callback) {
      var Haml;
      try {
        Haml = require('haml');
        return callback(null, Haml(code)());
      } catch (err) {
        return callback(err);
      }
    }
  };

}).call(this);