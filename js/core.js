/* Logo Color Changes */

/* Onpage linkng smooth effect */

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
	

/* Appeaing Effects */
	
	$('.up-effect').Oppear({
		direction:'up',
        delay : 1000,
	});
	$('.down-effect').Oppear({
		direction:'down',
        delay : 1000,
	});
	$('.left-effect').Oppear({
		direction:'right',
        delay : 1000,
	});
	$('.right-effect').Oppear({
		direction:'left',
        delay : 1000,
	});

$('h2').Oppear({
		direction:'up',
    delay : 1000,
	});


