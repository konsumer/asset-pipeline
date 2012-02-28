(function() {
  var Path, async;

  async = require('async');

  Path = require('path');

  module.exports.search_deps = function search_deps(code, options, ext, cb) {
    var dir, file, funcs, imports, matches, path, pipeline, _i, _len, _ref, _ref2;
    pipeline = options.pipeline;
    dir = Path.dirname(options.filename);
    funcs = [];
    matches = code.match(/^@import\s.*$/mg);
    if (matches != null) {
      _ref = code.match(/^@import\s.*$/mg);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        imports = _ref[_i];
        file = (_ref2 = imports.match(/^@import\s+'([^']+)'/)) != null ? _ref2 : imports.match(/^@import\s+"([^"]+)"/);
        if (file) {
          path = Path.relative(pipeline.options.assets, Path.join(dir, file[1]));
          if (!path.match(/^\.\.\//)) {
            funcs.push(function(cb) {
              return pipeline.compile_file(Path.join('/', path), cb);
            });
          }
        }
      }
    }
    return async.parallel(funcs, cb);
  };

}).call(this);