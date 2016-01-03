jQuery(document).ready(function(){
	
	/*
	 * //:FIXME  domain bouned links..
	 * */
	jQuery('a[href*=lifebook.co.il]').each(function(i, val){
		jQuery(val).attr("target", "_self");		
		val.outerHTML = val.outerHTML.replace(/http:\/\/www.lifebook.co.il\//g, '/');
		val.attributes.target = "_self";
	});
	
	/*
	 *  mobile menu
	 */
	var d = jQuery('<div class="mobileMenu" style="display:none"/>');
	jQuery('#block-system-main-menu .content >  .menu > li > a').each(function(i, val){		
		d.append(jQuery(val).clone());
	});
	
	jQuery('body').append(d);
	
/*
 * 	mobileHeader
 */
function mobileMenu(){							
	jQuery(".mobileMenu")
		.css("top", jQuery('#wrapper').offset().top+"px")
		.toggle("slow");
	setTimeout(function(){jQuery(".mobileMenu").hide("slow");},10000);
}
var body = jQuery('body');body.hasClass("front")
body.prepend(
		jQuery('<div  id="mobileHeader" />')
			.prepend(  jQuery('<span class="menuBtn "  >').bind("click", mobileMenu))
			.prepend(	  jQuery('<span  class="contactBtn"  />'))
			.prepend(  jQuery('<span  class="logoBtn "  >'))
	);

if(body.hasClass("front")){
	var bl = jQuery("#block-block-1");
	body.append( jQuery('tbody tr:first-child > td:first-child  p' , bl).clone().addClass("mobileInfo").attr("style", ""));
	bl.remove();
	setTimeout(_fix_slideshow,250);
}

jQuery('.view-id-front_slideshow .views-field-field-link-image img').each(function(i, val){
	jQuery(val).attr("width", "");
});
//~ _fix_slideshow();

//~ jQuery(window).on("resize", _fix_slideshow);
if(body.hasClass("front")){
jQuery(window).resize(function () { 
	waitForFinalEvent(function(){ 
		//~ alert('Resize...'); 
		_fix_slideshow();
		window.title = "";
		}, 10, "some unique string"); 
}); 
}
/*
 * remove empty p tags from slide show body content ..
 * 
 */
var t = jQuery('.views-field-field-body p');
t.each(function() {
    if ( '' === jQuery.trim( jQuery( this ).text() ) ) {
      jQuery( this ).remove();
    }
});
if(typeof t.replace == "function"){
	t.html(t.replace(/<p><\/p>/g, ''));
}
});

var waitForFinalEvent = (function () { 
	var timers = {}; 
	return function (callback, ms, uniqueId) { 
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; } 
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); } 
		timers[uniqueId] = setTimeout(callback, ms); 
	}; 
})(); 

function _fix_slideshow(){
	var vc =jQuery('#views_slideshow_cycle_main_front_slideshow-block');
		//~  views_slideshow_cycle_main_front_slideshow-block
	var width	=	vc.width()-30;
	//var width	=	jQuery('.view-id-front_slideshow .views_slideshow_cycle_main').width();
	//~ var width	=	jQuery('body').width();
							//~ #views_slideshow_cycle_main_front_slideshow-block
							//~ views-slideshow-cycle-main-frame
	//~ var width	=	jQuery('#views_slideshow_cycle_main_front_slideshow-block').width();
	var height	=	jQuery('#views_slideshow_cycle_main_front_slideshow-block').height();
	
	//~ var changedOpts = jQuery('#views_slideshow_cycle_teaser_section_front_slideshow-block').data('cycle.opts');
	
	var changedOpts = {};
	if(typeof changedOpts === "object"){
		changedOpts.timeout = 1500;
		changedOpts.speed = 1000;
		changedOpts.fit = 1;
		changedOpts.containerResize = 0;
		changedOpts.width	=	width;
		changedOpts.height	=	height;
		changedOpts.after	=	function(elm){
			var height = 0;
			jQuery('.views-field', this).not('.views-field-edit-node').each(function(i, val){
				var hh = jQuery(val).height() ;
				
				if(hh != 0){					height += hh;				}
			});
			//~ if( height != 0 ){jQuery(".skin-default").height(height+20)};
			//~ if( height != 0 ){jQuery(".skin-default").animate({"height" : height+20},"fast")};
			
		};
		changedOpts.before	=	function(currSlideElement, nextSlideElement, options, forwardFlag){
			var height = 0;
			jQuery(nextSlideElement).show();
			jQuery('.views-field', nextSlideElement).not('.views-field-edit-node').each(function(i, val){
				var hh = jQuery(val).height() ;
				if(hh != 0){					height += hh;				}
			});
			if( height != 0 ){jQuery(".skin-default").animate({"height" : height+20},"slow")};
			//~ jQuery(nextSlideElement).hide();
			
		};
		 changedOpts.cssAfter =      {"margin": "0 auto"};
	//	var changedOpts = jQuery('#views_slideshow_cycle_teaser_section_front_slideshow-block').data('cycle.opts');
		
		jQuery('#views_slideshow_cycle_teaser_section_front_slideshow-block').cycle('destroy');
		console.log(changedOpts);
		jQuery('#views_slideshow_cycle_teaser_section_front_slideshow-block').cycle(changedOpts);
		//~ vc.css("opacity",1);
		var h = jQuery('#views_slideshow_cycle_teaser_section_front_slideshow-block').height();

	}
}


//~ setTimeout(_fix_slideshow,550);
//~ setTimeout(_fix_slideshow,1550);
