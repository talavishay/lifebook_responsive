
jQuery(document).ready(function(){

// displayMode
	//
	//  0  =  off / 1 = on 
	//~ jQuery.cookie('mobileMode'
	
	if(!jQuery.cookie('mobileMode')){
		if(window.confirm('turn on mobileMode ?')){
			jQuery.cookie('mobileMode', 1);
			document.location.reload();			
		}
	} else {
	 console.log("MMMODE");
	}
});
