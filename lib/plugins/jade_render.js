// Generated by CoffeeScript 1.3.3
(function() {

  module.exports = {
    source: 'jade',
    target: 'html',
    compile: function compile(code, options, callback) {
      var jade, _ref;
      try {
        jade = require('jade');
        return jade.render(code, (_ref = options.plugin_config) != null ? _ref : {}, callback);
      } catch (err) {
        return callback(err);
      }
    }
  };

}).call(this);
