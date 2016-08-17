
	$(document).ready(function(){
	  $('.bxslider').bxSlider();
	   auto: true,
	   autoControls: true,
	   infiniteLoop: true,
	   startSlide:true,
	   pager:false;
	});

    ('.bx-pager-item a').click(function(e) {
    var i = $(this).data('slide-index');
    mainslider.goToSlide(i);
    mainslider.stopAuto();
    restart = setTimeout(function() {
    //        mainslider.startAuto();
     //   }, 1500);


      //  return false;
    //});//
