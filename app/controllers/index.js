// Cargamos el módulo para conectar con la API
var api = require('conectarapi');

$.index.title = "Demo ListView";

// Obtenemos las personas
api.obtenerPersonas(function(_respuesta){
	
	if (_respuesta.exito) {
		
		var datos = JSON.parse(_respuesta.datos);
		datos = datos.results;
		
		var personas = _.map(datos, function (persona){
			return {
				properties: { 
					datos: persona, 
					searchableText: persona.user.name.first 
				},
				foto: { image: persona.user.picture.thumbnail },
				nombre: { text: persona.user.name.first },
				apellido: { text: persona.user.name.last },
			};
		});
		
		$.listView.listSection.setItems(personas);
			
	} else {
		alert(_respuesta.error);	
	}
	
});

// Guardamos la referencia a la navigationWindow
Alloy.Globals.navWindow = $.index;

// Abrimos la ventana
$.index.open();