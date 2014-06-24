$(function() {
	
	var LLAnimation	= (function() {
		
		var $wrapper		= $('#ll-wrapper'),
			//support			= Modernizr.csstransforms,
			
			
			init			= function() {
				
				$('#ll-wrapper h2').lettering();
				
				initEvents();
			
			},
			
			initEvents		= function() {
				
				$('.description li:first').on( 'click', function( event ) {
					
					
					setTimeout( function() {
						//if( support ) {
						$wrapper.addClass('active');
						
						
					}, 2 );
					return false;
					
				});
			
			};
		
		return { init : init };
	
	})();
	
	LLAnimation.init();
	
});
$('.contact-facebook').slideUp();
$('.contact-google').slideUp();
$('.contact-twitter').slideUp();
$('.thumbs-arrow-div').hide();	

$(document).ready(function(){
	
	$('#circle_contact .description li:nth-child(4) a').click(function(){
		$('.contact-facebook').slideDown();
		});
		
	$('#circle_contact .description li:nth-child(3) a').click(function(){
		$('.contact-google').slideDown();
		});
	$('#circle_contact .description li:nth-child(2) a').click(function(){
		$('.contact-twitter').slideDown();
		});
	$('#circle_contact .description li:nth-child(1) a').click(function(){	
	     $('.email-slide li:nth-child(1)').animate({'right':'0px'});
		 $('.email-slide li:nth-child(2)').delay(300).animate({'right':'0px'});
		 $('.email-slide li:nth-child(3)').delay(600).animate({'right':'0px'});
	 });
		
		
			
	$('.contact-facebook .arrow').click(function(){
		$('.contact-facebook').slideUp();
		});
    $('.contact-google .arrow').click(function(){
		 $('.contact-google').slideUp();
		});
	$('.contact-twitter .arrow').click(function(){
		 $('.contact-twitter').slideUp();
		});	
		
	var webname,divpath;	
	$('.thumbs li').mouseover(function(){
	
	 webname=$(this).find('img').attr('alt');
	 
	  $(this).append('<div class="thumbs-arrow-div"><div class="thumbs-arrow"></div>'+webname+'</div>');		
     $(this).find('.thumbs-arrow-div').show();	
	});
 	
	
	$('.thumbs li').mouseleave(function(){
	
	 webname=$(this).find('img').attr('alt');
	 $('.thumbs-arrow-div').hide();	
	 
	  //$(this).remove('<div class="thumbs-arrow-div"><div class="thumbs-arrow"></div>'+webname+'</div>');		
     
	});
 	
	
		
});		
	