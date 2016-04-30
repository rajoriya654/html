$(function() {
    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    //Multifilter controls
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function() {
        $('.sort-btn').removeClass('active');
    });
    //Sort controls
    $('.sort-btn').click(function() {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
	
	
});
$(function() {
   //Initialize filterizr with default options
   $('.filtr-container').filterizr();
   $('.carousel-sync').on('slide.bs.carousel', function(ev) {
  		var dir = ev.direction == 'right' ? 'prev' : 'next';
		$('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
   });
   $('.carousel-sync').on('slid.bs.carousel', function(ev) {
		$('.carousel-sync').removeClass('sliding');
   });
});