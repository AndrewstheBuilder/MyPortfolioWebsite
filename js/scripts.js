/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

//beginning of terminal output code
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const byId = (id) => {
    const res = document.getElementById(id);
    if (res == null) {
        throw new Error(`No element with id '${id}'`);
    }
    return res;
};
const query = (selector) => {
    const res = document.querySelector(selector);
    if (res == null) {
        throw new Error(`No element matching selector '${selector}'`);
    }
    return res;
};
const queryAll = (selector) => [...document.querySelectorAll(selector)].map(x => x);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const shellInputType = (text) => __awaiter(void 0, void 0, void 0, function* () {
    byId("terminal").innerText = "";
    let i = 0;
    while (i < text.length) {
        if (byId("terminal").innerText !== text.substring(0, i)) {
            break;
        }
        byId("terminal").innerText = byId("terminal").innerText + text.charAt(i);
        i++;
        yield sleep(50);
    }
});
const shellInputBlank = () => {
    byId("terminal").innerText = "";
};
byId("anchor-resume").onmouseover = () => shellInputType("curl\u00a0Resume.pdf");
byId("anchor-experience").onmouseover = () => shellInputType("doskey\u00a0/history");
byId("anchor-projects").onmouseover = () => shellInputType("git\u00a0clone\u00a0Projects");
byId("anchor-contact").onmouseover = () => shellInputType("ping\u00a0Andrews");
byId("anchor-title").onmouseover = () => shellInputType("dir\u00a0Andrews\\");
queryAll("#mainNav a").forEach(x => x.onmouseleave = shellInputBlank);