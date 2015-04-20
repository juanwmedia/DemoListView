// http://docs.appcelerator.com/backbone/0.9.2/#Sync
function Sync(method, model, opts) {
	
	// Sólo soportamos el método read/fetch
	if ("read" === method) {

		var api = require('conectarapi');
		api.obtenerPersonas(function(_respuesta) {
			
			var personas = _respuesta.datos.results;
			
			if (personas) {
				_.isFunction(opts.success) && opts.success(personas);
				"read" === method && model.trigger("fetch");
			} else {
				_.isFunction(opts.error) && opts.error(personas);
			}

		});

	}
}

module.exports.sync = Sync;