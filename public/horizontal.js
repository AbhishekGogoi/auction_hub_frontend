document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  document.addEventListener("touchstart", function (e) {}, false);

  // Wrap inner body content
  const body = document.body;
  const horizontalMenuContainer = document.createElement("div");
  horizontalMenuContainer.className = "horizontalMenucontainer";
  while (body.firstChild) {
    horizontalMenuContainer.appendChild(body.firstChild);
  }
  body.appendChild(horizontalMenuContainer);

  // Add overlap black background
  const overlapBlackBg = document.createElement("div");
  overlapBlackBg.className = "overlapblackbg";
  document.querySelector(".horizontalMenu").prepend(overlapBlackBg);

  // Toggle active class on horizontal-navtoggle click
  document
    .getElementById("horizontal-navtoggle")
    .addEventListener("click", function () {
      body.classList.toggle("active");
    });

  // Remove active class on overlap black background click
  overlapBlackBg.addEventListener("click", function () {
    body.classList.remove("active");
  });

  // Add horizontalMenu-click elements
  document
    .querySelectorAll(".horizontalMenu > .horizontalMenu-list > li")
    .forEach(function (li) {
      if (
        li.querySelector(".sub-menu") ||
        li.querySelector(".horizontal-megamenu")
      ) {
        const span = document.createElement("span");
        span.className = "horizontalMenu-click";
        span.innerHTML =
          '<i class="horizontalMenu-arrow fa fa-angle-down"></i>';
        li.prepend(span);
      }
    });

  // Handle click event on horizontalMenu-click
  document.querySelectorAll(".horizontalMenu-click").forEach(function (span) {
    span.addEventListener("click", function () {
      span.classList.toggle("ws-activearrow");
      span.parentElement.siblings.forEach((sib) =>
        sib.querySelector(".ws-activearrow")?.classList.remove("ws-activearrow")
      );
      const subMenu = span.nextElementSibling;
      const megaMenu = span.nextElementSibling;
      subMenu && subMenu.classList.toggle("slow");
      megaMenu && megaMenu.classList.toggle("slow");
    });
  });

  // Add horizontalMenu-click02 elements
  document
    .querySelectorAll(".horizontalMenu > .horizontalMenu-list > li > ul > li")
    .forEach(function (li) {
      if (li.querySelector(".sub-menu")) {
        const span = document.createElement("span");
        span.className = "horizontalMenu-click02";
        span.innerHTML =
          '<i class="horizontalMenu-arrow fa fa-angle-down"></i>';
        li.prepend(span);
      }
    });

  // Handle click event on horizontalMenu-click02
  document.querySelectorAll(".horizontalMenu-click02").forEach(function (span) {
    span.addEventListener("click", function () {
      span
        .querySelector(".horizontalMenu-arrow")
        .classList.toggle("horizontalMenu-rotate");
      const subMenu = span.nextElementSibling;
      subMenu && subMenu.classList.toggle("slow");
    });
  });

  // Handle window resize event
  window.addEventListener("resize", function () {
    if (window.outerWidth < 992) {
      document.querySelector(".horizontalMenu").style.height =
        window.innerHeight + "px";
      document.querySelector(".horizontalMenucontainer").style.minWidth =
        window.innerWidth + "px";
    } else {
      document.querySelector(".horizontalMenu").removeAttribute("style");
      document
        .querySelector(".horizontalMenucontainer")
        .removeAttribute("style");
      body.classList.remove("active");
      document
        .querySelectorAll(
          ".horizontalMenu > .horizontalMenu-list > li > .horizontal-megamenu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu > li > ul.sub-menu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu"
        )
        .forEach(function (menu) {
          menu.removeAttribute("style");
        });
      document
        .querySelectorAll(".horizontalMenu-click")
        .forEach(function (span) {
          span.classList.remove("ws-activearrow");
        });
      document
        .querySelectorAll(".horizontalMenu-click02 > i")
        .forEach(function (icon) {
          icon.classList.remove("horizontalMenu-rotate");
        });
    }
  });

  window.dispatchEvent(new Event("resize"));

  // Handle adding active class for menu items based on current URL
  document
    .querySelectorAll(".horizontalMenu-list li a")
    .forEach(function (anchor) {
      const pageUrl = window.location.href.split(/[?#]/)[0];
      if (anchor.href === pageUrl) {
        anchor.classList.add("active");
        anchor.parentElement.classList.add("active");
        if (anchor.parentElement.parentElement.previousElementSibling) {
          anchor.parentElement.parentElement.previousElementSibling.classList.add(
            "active"
          );
          anchor.parentElement.parentElement.previousElementSibling.click();
        }
      }
    });

  document
    .querySelectorAll(".horizontal-megamenu li a")
    .forEach(function (anchor) {
      const pageUrl = window.location.href.split(/[?#]/)[0];
      if (anchor.href === pageUrl) {
        anchor.classList.add("active");
        anchor.parentElement.classList.add("active");
        if (
          anchor.parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.previousElementSibling
        ) {
          anchor.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add(
            "active"
          );
          anchor.parentElement.parentElement.previousElementSibling.click();
        }
      }
    });

  document
    .querySelectorAll(".horizontalMenu-list .sub-menu .sub-menu li a")
    .forEach(function (anchor) {
      const pageUrl = window.location.href.split(/[?#]/)[0];
      if (anchor.href === pageUrl) {
        anchor.classList.add("active");
        anchor.parentElement.classList.add("active");
        if (
          anchor.parentElement.parentElement.parentElement.parentElement
            .previousElementSibling
        ) {
          anchor.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add(
            "active"
          );
          anchor.parentElement.parentElement.previousElementSibling.click();
        }
      }
    });

  document
    .querySelectorAll(".horizontalMenu-list .sub-menu .sub-menu .sub-menu li a")
    .forEach(function (anchor) {
      const pageUrl = window.location.href.split(/[?#]/)[0];
      if (anchor.href === pageUrl) {
        anchor.classList.add("active");
        anchor.parentElement.classList.add("active");
        if (
          anchor.parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.previousElementSibling
        ) {
          anchor.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add(
            "active"
          );
          anchor.parentElement.parentElement.previousElementSibling.click();
        }
      }
    });
});
