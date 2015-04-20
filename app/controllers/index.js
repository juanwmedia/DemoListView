// Cargamos el módulo para conectar con la API
var api = require('conectarapi');

// Callback click sobre una persona
function personaClicada(_evento) {
	var persona = $.listSection.getItemAt(_evento.itemIndex);
	var mostrarPersona = Alloy.createController('detallePersona', persona).getView();
	
	Alloy.Globals.navWindow.openWindow(mostrarPersona);
}

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
		
		$.listSection.setItems(personas);
			
	} else {
		alert(_respuesta.error);	
	}
	
});

// Guardamos la referencia a la navigationWindow
Alloy.Globals.navWindow = $.index;

// Abrimos la ventana
$.index.open();