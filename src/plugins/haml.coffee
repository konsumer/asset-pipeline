module.exports =
	source: 'haml'
	target: 'html'
	compile: (code, options, callback) ->
		Haml = require 'haml'
		try
			callback(null, Haml(code)())
		catch err
			callback(err)
