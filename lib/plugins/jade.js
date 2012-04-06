// Generated by CoffeeScript 1.2.1-pre
(function() {

  module.exports = {
    source: 'jade',
    target: 'html',
    compile: function compile(code, options, callback) {
      var jade;
      try {
        jade = require('jade');
        return jade.render(code, {
          filename: options.filename
        }, callback);
      } catch (err) {
        return callback(err);
      }
    }
  };

}).call(this);