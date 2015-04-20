// Cargamos el módulo para conectar con la API
var api = require('conectarapi');

$.index.title = "Demo ListView";

// Creamos la colección de modelos "Persona"
var coleccionPersonas = Alloy.createCollection('Persona');

// Solicitamos personas a la API REST
// http://docs.appcelerator.com/backbone/0.9.2/#Collection-fetch
coleccionPersonas.fetch({
	
	// Éxito
	success: function(_coleccion, _respuesta) {
		
		// Las colecciones en Backbone tiene una propiedad llamada "models" para acceder a ellos
		var personas = _.map(_coleccion.models, function (persona){
			
			// Los modelos en Backbone tienen una propiedad llamada "attributes" que es una 
			// representación en JSON de sus propiedades
			var atributosPersona = persona.attributes;
			
			return {
				properties: { 
					datos: atributosPersona, 
					searchableText: atributosPersona.user.name.first 
				},
				foto: { image: atributosPersona.user.picture.thumbnail },
				nombre: { text: atributosPersona.user.name.first },
				apellido: { text: atributosPersona.user.name.last },
			};
		});
		
		$.listView.listSection.setItems(personas);
		
	},
	
	// Error
	error: function(_coleccion, _respuesta) {
		alert('Error ' + JSON.stringify(_respuesta));	
	}
	
});


// Guardamos la referencia a la navigationWindow
Alloy.Globals.navWindow = $.index;

// Abrimos la ventana
$.index.open();