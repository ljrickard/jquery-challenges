
/*------------------------------------- hide ---------------*/
/*
$(document).ready(function(){

    $('div').click(function(){
        $('div').hide();
    });
});
*/
/*------------------------------------- hide slow ---------------*/
/*
$(document).ready(function(){

    $('div').click(function(){
        $('div').hide('slow');
    });
});
*/
/*------------------------------------- toggle ---------------*/
/*
$(document).ready(function(){

    $('div').click(function(){
        $('p').toggle('slow');
    });
});
*/

/*------------------------------------- slideToggle ---------------*/
/*
$(document).ready(function(){

    $('div').click(function(){
        $('p').slideToggle('slow');
    });
});

*/

/*------------------------------------- fade mouseenter ---------------*/
/*
$(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('slow',.5);
    });
     $('div').mouseleave(function(){
        $('div').fadeTo('slow',1);
    });
});

*/
/*------------------------------------- fade mouseenter toggle---------------*/
/*
$(document).ready(function(){
    $('div').mouseenter(function(){
    	$('div').fadeTo('fast',.5);
    });
    $('div').mouseleave(function(){
    	$('div').fadeTo('fast',1);
    });

    $('div').click(function(){
    	$('p').toggle('slow');
    });
});
*/
/*------------------------------------- Method Chaining---------------*/

$(document).ready(function(){
    $('div').mouseenter(function(){
    	$('div').removeClass('makeBlue').addClass('makeBorder');
    });
    $('div').mouseleave(function(){
    	$('div').removeClass('makeBorder').addClass('makeBlue');
    });

    $('div').click(function(){
    	$('p').slideToggle('slow');
    });
});