var obtenerPersonas = function(_callback) {
	
	var url = "http://api.randomuser.me/?results=100";
	
	var client = Ti.Network.createHTTPClient({
		
	     // function called when the response data is available
	     onload : function(e) {
	     	
	         Ti.API.info("Received text: " + this.responseText);
	         
	         _callback({
	         	exito: true,
	         	datos: this.responseText
	         });
	         
	     },
	     
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         
	         _callback({
	         	exito: false,
	         	eror: e
	         });
	         
	     },
	     timeout : 5000  // in milliseconds
	 });
	 
	 // Prepare the connection.
	 client.open("GET", url);
	 
	 // Send the request.
	 client.send();
};

exports.obtenerPersonas = obtenerPersonas;