(function($) {
 $(document).ready( function() {
  var actElem = null;

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

  $("#contact h2").click();

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
