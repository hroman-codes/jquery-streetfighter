$(document).ready(function() {
	  $('.ryu').mouseenter(function() {
		$('.ryu-all').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
        $('.ryu-all').hide();
        $('.ryu-still').show();
	})
	.mousedown(function() {
        playHadouken();
		$('.ryu-all').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
              $(this).hide();
              $(this).css('left', '520px');
        });
    })
	.mouseup(function() {
        $('.ryu-all').hide();
		$('.ryu-ready').show();
	});
});

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

$(document).keydown(function(event) {

    if ( event.keyCode == 88 || 99 ){ 
        $('.ryu-all').hide();
        $('.ryu-cool').show();
    }
    }).keyup(function(event) {

        if ( event.keyCode == 88 || 99 ){
            $('.ryu-all').hide();
            $('.ryu-still').show();
        }
});