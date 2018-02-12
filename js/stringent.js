/*!
 @abstract  Stringent Studios - Site JavaScript
 @author    Chris Stringer (cstringer42\@gmail.com)
 @version   1.0.3
 @updated   2018-02-11
 @copyright &copy; Copyright 2018 by Stringent Studios. All rights reserved.
 */
(function($) {

  var activeElement = null,

    // CSS classes
    cls = {
      active: "active"
    },

    // selectors
    sels = {
      animateParent: "html",
      defaultSect: "#contact",
      header: "header",
      section: "section",
      sectionContent: ".section-content",
      sectionHeader: "section h2",
      sectionLink: "h2 a"
    },

    // scroll to element animate time
    scScrollTime = 1000,

    // mobile width "breakpoint"
    widthMobile = 640;

  // fire init on DOM ready
  $(document).ready(init);

  function init() {
    // handle interesting events on window    
    $(window).on('hashchange', handleHashChange);
    $(window).on("resize", handleWindowResize);

    // handle clicks/touches on header elements
    $(sels.header).on('touchstart', handleHeaderTouch);
    $(sels.sectionHeader).on('touchstart', 'a', handleSectionHeaderTouch);
    $(sels.sectionHeader).on('click', 'a', handleSectionHeaderClick);

    // set initial view by hash location
    handleHashChange();
  }

  /** handleHeaderTouch */
  function handleHeaderTouch(e){
    // mimic a hover
    $(e.target).hover();
  }

  /** handleSectionHeaderTouch */
  function handleSectionHeaderTouch(e) {
    // mimic a click
    $(e.target).click();
    return false;
  }

  /** handleSectionHeaderClick */
  function handleSectionHeaderClick(e) {
    if ($(window).width() > widthMobile) { return false; }

    if (activeElement == e.target) {
      // active section clicked: hide it
      hideAllSections();
      activeElement = null;

    } else if (activeElement != null) {
      // different section clicked: hide previous, show new
      hideAllSections();
      activeElement = e.target;
      showElSection(activeElement);
      scrollToElement(activeElement);

    } else {
      // show the clicked section
      activeElement = e.target;
      showElSection(activeElement);
      scrollToElement(activeElement);
    }

    // update window history
    window.history.pushState(
      null,
      "",
      (activeElement == null) ? "/" : $(e.target).context.hash
    );

    return false;
  }

  /** hideAllSections */
  function hideAllSections() {
    $(sels.section)
      .removeClass(cls.active)
      .find(sels.sectionContent)
        .slideUp('fast');
  }

  /** showElSection */
  function showElSection(el) {
    $(el)
      .parents(sels.section)
      .addClass(cls.active)
      .find(sels.sectionContent)
        .slideDown('fast');
  }

  /** scrollToElement */
  function scrollToElement(el) {
    $(sels.animateParent).animate({
      scrollTop: $(el).parent().offset().top
    }, scScrollTime);
  }

  /** reload section by location hash */
  function handleHashChange() {
    var hash = window.location.hash.substr(1),
      sectSel = '';

    if (hash) {
      sectSel = "#" + hash;
    } else if ($(window).width() <= widthMobile) {
      sectSel = sels.defaultSect;
    }

    if (sectSel) {
      $(sectSel + " " + sels.sectionLink).click();
    }
  }

  /** handleWindowResize */
  function handleWindowResize() {
    var $sectContent = $(sels.sectionContent);

    $sectContent.parent().removeClass(cls.active);

    if ($(window).width() > widthMobile) {
      $sectContent.show();
      activeElement = null;
    } else if (activeElement == null) {
      $sectContent.hide();
    }
  }

})(window.jQuery);
