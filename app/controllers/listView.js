var args = arguments[0] || {};

// Callback click sobre una persona
function personaClicada(_evento) {
	var persona = $.listSection.getItemAt(_evento.itemIndex);
	var mostrarPersona = Alloy.createController('detallePersona', persona).getView();
	
	if (OS_IOS) {
		Alloy.Globals.navWindow.openWindow(mostrarPersona);
	} else {
		mostrarPersona.open();
	}
	
}