$('.tabs').tabslet({
  mouseevent: 'click',
  attribute: 'href',
  animation: true
});

// $(function() {
  // $('a[href*=#]:not([href=#], .tab)').click(function() {
    // if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      // var target = $(this.hash);
      // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      // if (target.length) {
        // $('html,body').animate({
          // scrollTop: target.offset().top
        // }, 1000);
        // return false;
      // }
    // }
  // });
// });

$('a[href*=#]:not([href=#], .tab)').on('click', function(e) {
	e.preventDefault();
	console.log('button clicked!');
	var href= $(this).attr('href');
	console.log(href);
	TweenLite.to(window, 2, {scrollTo: {y:$(href).position().top}});
	
});

$('a.mobile-only').on('click', function() {
	
	$('.fixed-nav').toggleClass('active');
})

var waypoints = $('#hero').waypoint({
  handler: function() {
    $('#logo').addClass("fadeInTop").removeClass("startTop");
    $('#hero>h1').addClass("fadeInLeft").removeClass("startLeft");
    $('#hero>p').addClass("fadeInRight").removeClass("startRight");
    $('.hero-btn').addClass("fadeInBottom").removeClass("startBottom");
  }
})

var waypoints = $('#tech').waypoint({
  handler: function() {
    $('#tech>h1').addClass("fadeInTop").removeClass("startTop");
    $('#tech>p').addClass("fadeInRight").removeClass("startRight");
    $('#tech>.underline').addClass("fadeInLeft").removeClass("startLeft");
    $('.body-image').addClass("fadeInLeft").removeClass("startLeft");
    $('.body-text').addClass("fadeInRight").removeClass("startRight");
  },
    
    context: '#hero',
    offset: '50%'
})

var waypoints = $('#design').waypoint({
  handler: function() {
    $('#design h1').addClass("fadeInTop").removeClass("startTop");
    $('#design p').addClass("fadeInRight").removeClass("startRight");
    $('#design .underline').addClass("fadeInLeft").removeClass("startLeft");
    $('.slide.startLeft').addClass("fadeInLeft").removeClass("startLeft");
    $('.slide.startRight').addClass("fadeInRight").removeClass("startRight");
  },
    
    context: '#tech',
    offset: '75%'
})

var waypoints = $('#support').waypoint({
  handler: function() {
    $('#support h1').addClass("fadeInTop").removeClass("startTop");
    $('#support p').addClass("fadeInRight").removeClass("startRight");
    $('#support .underline').addClass("fadeInLeft").removeClass("startLeft");
    $('.horizontal').addClass("fadeInLeft").removeClass("startLeft");
    $('#tab-1').addClass("fadeInRight").removeClass("startRight");
  },
    
    context: '#design',
    offset: '50%'
})

var waypoints = $('#price').waypoint({
  handler: function() {
    $('#price h1').addClass("fadeInTop").removeClass("startTop");
    $('#price p').addClass("fadeInRight").removeClass("startRight");
    $('#price .underline').addClass("fadeInLeft").removeClass("startLeft");
    $('.price-box.startLeft').addClass("fadeInLeft").removeClass("startLeft");
    $('.price-box.startRight').addClass("fadeInRight").removeClass("startRight");
      $('.price-box.startTop').addClass("fadeInTop").removeClass("startTop");
      $('.btn').addClass("fadeInBottom").removeClass("startBottom");
  },
    
    context: '#support',
    offset: '50%'
})