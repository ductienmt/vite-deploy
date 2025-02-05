/*
Template Name: Admin Template
Author: Wrappixel
File: js
*/
// ==============================================================
// Auto select left navbar
// ==============================================================

import jQuery from "jquery";
jQuery(function () {
    "use strict";
    var url = window.location + "";
    var path = url.replace(
      window.location.protocol + "//" + window.location.host + "/",
      ""
    );
    var element = jQuery("ul#sidebarnav a").filter(function () {
      return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
    });
    element.parentsUntil(".sidebar-nav").each(function (index) {
      if (jQuery(this).is("li") && jQuery(this).children("a").length !== 0) {
        jQuery(this).children("a").addClass("active");
        jQuery(this).parent("ul#sidebarnav").length === 0
          ? jQuery(this).addClass("active")
          : jQuery(this).addClass("selected");
      } else if (!jQuery(this).is("ul") && jQuery(this).children("a").length === 0) {
        jQuery(this).addClass("selected");
      } else if (jQuery(this).is("ul")) {
        jQuery(this).addClass("in");
      }
    });
  
    element.addClass("active");
    jQuery("#sidebarnav a").on("click", function (e) {
      if (!jQuery(this).hasClass("active")) {
        // hide any open menus and remove all other classes
        jQuery("ul", jQuery(this).parents("ul:first")).removeClass("in");
        jQuery("a", jQuery(this).parents("ul:first")).removeClass("active");
  
        // open our new menu and add the open class
        jQuery(this).next("ul").addClass("in");
        jQuery(this).addClass("active");
      } else if (jQuery(this).hasClass("active")) {
        jQuery(this).removeClass("active");
        jQuery(this).parents("ul:first").removeClass("active");
        jQuery(this).next("ul").removeClass("in");
      }
    });
    jQuery("#sidebarnav >li >a.has-arrow").on("click", function (e) {
      e.preventDefault();
    });
  });