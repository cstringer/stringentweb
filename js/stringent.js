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
      widthMobile = 480
      scScrollTime = 1000;

  // expand/collapse sections in reponsive mode
  $("section").on("click", "h2", function() {
   if ($(window).width() <= widthMobile) {
    if (actElem == this) {
     $(actElem).parent().removeClass(actClass).find(".section-content").slideUp('fast');
     actElem = null;
    } else if (actElem != null) {
     $(actElem).parent().removeClass(actClass).find(".section-content").hide();
     actElem = this;
     $(actElem).parent().addClass(actClass).find(".section-content").slideDown('fast');
     $("html").animate({ scrollTop: $(this).parent().offset().top }, scScrollTime);
    } else {
     actElem = this;
     $(actElem).parent().addClass(actClass).find(".section-content").slideDown('fast');
     $("html").animate({ scrollTop: $(this).parent().offset().top }, scScrollTime);
    }
   }
	 return false;
  });

  $("section h2").on('click', 'a', function(e) {
   $(this).parent('h2').click();
   e.stopPropagation();
  });

  // reload section by location hash
  var hash = window.location.hash.substr(1);
	console.log(hash);
  if (hash) {
   $("#" + hash + " h2").click();
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
