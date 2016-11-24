jQuery(document).ready(function() {
     jQuery('.header').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeIn',
	    offset: 100   
	   });
     jQuery('.animate').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInUp',
	    offset: 100   
	   });
    jQuery('.anim-left').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInLeft',
	    offset: 200   
	   });
    jQuery('.anim-right').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInRight',
	    offset: 200   
	   });
});




