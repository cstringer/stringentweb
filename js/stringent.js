(function($) {
 $(document).ready( function() {

  var actElem = null;

  // expand/collapse sections in reponsive mode
  $("section h2").on("click", function() {
   if ($(window).width() <= 480 && actElem != this) {
    if (actElem != null) {
     $(actElem).parent().removeClass("active").find(".section-content").slideUp('fast');
    }
    $(this).parent().toggleClass("active").find(".section-content").slideToggle('fast');
    $("html").animate({ scrollTop: $(this).parent().offset().top }, 1000);
    actElem = this;
   }
  });

  // reload section by location hash
  var hash = window.location.hash.substr(1);
  if (hash) {
    $("#" + hash + " h2").click();
	} else {
    // show contact, but don't scroll to it
    actElem = $("#contact h2");
		$(actElem).parent().toggleClass("active").find(".section-content").show();
  }

  // handle window resize, hide/show section content
  $(window).on("resize", function() {
   if ($(window).width() > 480) {
    $(".section-content").show().parent().removeClass("active");
    actElem = null;
   } else if (actElem == null) {
    $(".section-content").hide().parent().removeClass("active");
   }
  });

 });
})(window.jQuery);
