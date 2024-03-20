(function(global) {

	// setup namespace for utility
	var ajaxUtils = {};


	// returns an HTTP ReQuest Object
	function getRequestObj(){
		if (window.XMLHttpRequest()) {
			return (new XMLHttpRequest());
	}
	else if (window.ActiveXObject){
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	}
	else{
		global.alert("Ajax is not supported");
		return(null);
	}

}
 
// make an AJAX GET REQUEST to the 'request url'
ajaxUtils.sendGetRequest = 
	function(requestUrl, responseHandler) {
		// body...
		var request = getRequestObj();
		request.onreadystatechange = 
		function(){
			handleResponse(request, responseHandler);
		};
		request.open("GET", requestUrl, true);
		request.send(null); //for post only
	};

	function handleResponse(request, responseHandler) {
		// body...
		if ((request.readyState == 4) && (request.status == 200)) {
				responseHandler(request);
			}
	}

	global.$ajaxUtils = ajaxUtils;

})(window);