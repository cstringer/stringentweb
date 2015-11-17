/*!
 @abstract  Stringent Studios - Site JavaScript
 @author    Chris Stringer (cstringer42\@gmail.com)
 @version   1.0.2
 @updated   2015-11-16
 @copyright &copy; Copyright 2015 by Stringent Studios. All rights reserved.
*/
(function($) {
 $(document).ready( function() {

  var actElem = null,
      actClass = "active",
      widthMobile = 640
      scScrollTime = 1000;

  $("header").on('touchstart', function(e){
   $(this).hover();
	});

  // expand/collapse sections in reponsive mode
  $("section h2").on('touchstart', 'a', function(e) {
   $(this).click();
	 return false;
	});
  $("section h2").on('click', 'a', function(e) {
   if ($(window).width() <= widthMobile) {
    if (actElem == this) {
     $('section').removeClass(actClass).find(".section-content").slideUp('fast');
     actElem = null;
    } else if (actElem != null) {
     $('section').removeClass(actClass).find(".section-content").slideUp('fast');
     actElem = this;
     $(actElem).parents('section').addClass(actClass).find(".section-content").slideDown('fast');
     $("html").animate({ scrollTop: $(this).parent().offset().top }, scScrollTime);
    } else {
     actElem = this;
     $(actElem).parents('section').addClass(actClass).find(".section-content").slideDown('fast');
     $("html").animate({ scrollTop: $(this).parent().offset().top }, scScrollTime);
    }
		if (actElem == null) {
		 window.history.pushState(null,"","/");
		} else if (window.history && $(this).context.hash) {
		 window.history.pushState(null,"",$(this).context.hash);
		}
   }
   return false;
  });

  // reload section by location hash
	handleHashChange();
	$(window).on('hashchange', handleHashChange);
	function handleHashChange() {
   var hash = window.location.hash.substr(1);
   if (hash) {
    $("#" + hash + " h2 a").click();
   } else if ($(window).width() <= widthMobile) {
	  $("#contact h2 a").click();
	 }
	}

  // handle window resize, hide/show section content
  $(window).on("resize", function() {
   if ($(window).width() > widthMobile) {
    $(".section-content").show().parent().removeClass(actClass);
    actElem = null;
   } else if (actElem == null) {
    $(".section-content").hide().parent().removeClass(actClass);
   }
  });

 });
})(window.jQuery);
