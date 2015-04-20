var args = arguments[0] || {};

// Creamos la estructura con los datos
$.detallePersona. title = 'Detalle: ' +  args.properties.datos.user.name.first;

$.foto.image 			= args.properties.datos.user.picture.large;
$.nombre.text 			= args.properties.datos.user.name.first + ' ' +args.properties.datos.user.name.last;
$.telefono.text 		= args.properties.datos.user.phone;
$.correoe.text 			= args.properties.datos.user.email;
$.direccion.text 		= args.properties.datos.user.location.street + ', ' + args.properties.datos.user.location.city;
$.bio.text				= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, urna nec porttitor consequat, magna libero venenatis arcu, ac faucibus tellus ipsum eget dolor. Cras tristique eleifend ante eu lobortis. Morbi sit amet turpis nisi. Sed molestie tempor nisl sit amet laoreet. ';

// Funciones que manejan los clicks en la información
$.telefono.addEventListener('click', function(_evento){
	Ti.API.info(JSON.stringify(_evento.source.text));
	
	var telefono = _evento.source.text;
	
	if (OS_IOS){
		if (Ti.Platform.canOpenURL('tel://' + telefono)){
			Ti.Platform.openURL('tel://' + telefono);
		}else{
			alert('No es un teléfono, quizás es el simulador, iPod, etc.');
		}
	}else{
		Ti.Platform.openURL('tel://' + telefono);
	}
});

$.direccion.addEventListener('click', function(_evento){
	Ti.Platform.openURL('https://maps.google.com/maps?q=' + encodeURIComponent(args.properties.datos.user.location.street + ', ' + args.properties.datos.user.location.city));
});

$.correoe.addEventListener('click', function(_evento){
	Ti.Platform.openURL('mailto:' + args.properties.datos.user.email);
});

// Cerrar ventana
function cerrarVentana() {	
	(OS_IOS) ? Alloy.Globals.navWindow.closeWindow($.detallePersona) : $.detallePersona.close();
}