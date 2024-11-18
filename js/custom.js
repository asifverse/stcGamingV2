/* ==============
 ========= js documentation ==========================
    ==================================================

     01. get device width
     -------------------------------------------------
     02. preloader
     -------------------------------------------------
     03. sidebar slider
     -------------------------------------------------
     04. custom cursor
     -------------------------------------------------
     05. scroll to top with progress
     -------------------------------------------------
     06. data background
     -------------------------------------------------
     07. stroked text
     -------------------------------------------------
     08. open search box
     -------------------------------------------------
     09. open offcanvas nav
     -------------------------------------------------
     10. authentication with wallet
     -------------------------------------------------
     11. chatbox
     -------------------------------------------------
     12. faq
     -------------------------------------------------
     13. toggle password
     -------------------------------------------------
     14. offcanvas cart
     -------------------------------------------------
     15. mobile menu
     -------------------------------------------------
     16. add active class to the current link
     -------------------------------------------------
     17. on window resize functions
     -------------------------------------------------
     18. footer copyright year
     -------------------------------------------------
     19. banner slider
     -------------------------------------------------
     20. feature slider
     -------------------------------------------------
     21. tournament details tab
     -------------------------------------------------
     22. prize details
     -------------------------------------------------
     23. match details tab
     -------------------------------------------------
     24. tournament sidebar slider
     -------------------------------------------------
     25. leaderboard tab
     -------------------------------------------------
     26. feature slider two
     -------------------------------------------------
     27. countdown
     -------------------------------------------------
     28. odometer counter
     -------------------------------------------------
     29. streamer slider
     -------------------------------------------------
     30. streamer slider two
     -------------------------------------------------
     31. last stream slider
     -------------------------------------------------
     32. choose slider
     -------------------------------------------------
     33. trending two slider
     -------------------------------------------------
     34. video popup
     -------------------------------------------------
     35. package tab
     -------------------------------------------------
     36. package slider
     -------------------------------------------------
     37. avatar slider
     -------------------------------------------------
     38. equipment slider
     -------------------------------------------------
     39. land slider
     -------------------------------------------------
     40. avatar two slider 
     -------------------------------------------------
     41. build experience slider 
     -------------------------------------------------
     42. enhance avatar slider 
     -------------------------------------------------
     43. new assets slider
     -------------------------------------------------
     44. partner slider 
     -------------------------------------------------
     45. nft details slider 
     -------------------------------------------------
     46. nft details toggle 
     -------------------------------------------------
     47. activity tab 
     -------------------------------------------------
     48. profile tab 
     -------------------------------------------------
     49. progress bar 
     -------------------------------------------------
     50. performance tab 
     -------------------------------------------------
     51. game details nft slider 
     -------------------------------------------------
     52. balance chart 
     -------------------------------------------------
     53. profit tab 
     -------------------------------------------------
     54. investment chart
     -------------------------------------------------
     55. profit chart 
     -------------------------------------------------
     56. private profile tab 
     -------------------------------------------------
     57. private profile sidebar tab 
     -------------------------------------------------
     58. deposit amount
     -------------------------------------------------
     59. deposit tab. 
     -------------------------------------------------
     60. vault tab
     -------------------------------------------------
     61. transaction tab 
     -------------------------------------------------
     62. withdraw tab 
     -------------------------------------------------
     63. game details slider 
     -------------------------------------------------
     64. game details nft slider 
     -------------------------------------------------
     65. related games slider
     -------------------------------------------------
     66. winner widget slider 
     -------------------------------------------------
     67. product details tab
     -------------------------------------------------
     68. social link active on hover 
     -------------------------------------------------
     69. winner widget slider 
     -------------------------------------------------
     70. team active on hover 
     -------------------------------------------------
     71. team active on hover
     -------------------------------------------------
     72. nice select
     -------------------------------------------------
     73. community active on hover 
     -------------------------------------------------
     74. social link active on hover
     -------------------------------------------------
     75. vanilla tilt animations
     -------------------------------------------------
     76. register gsap
     -------------------------------------------------
     77. gsap null config 
     -------------------------------------------------
     78. banner animation 
     -------------------------------------------------
     79. countdown animation 
     -------------------------------------------------
     80. about animation
     -------------------------------------------------
     81. about poster
     -------------------------------------------------
     82. parallax image with gsap
     -------------------------------------------------
     83. fade top gsap animation
     -------------------------------------------------
     84. fade right gsap animation
     -------------------------------------------------
     85. fade left gsap animation
     -------------------------------------------------
     86. appear down
     -------------------------------------------------
     87. title animation
     -------------------------------------------------
     88. template options
     -------------------------------------------------
     
    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(function () {
    /**
     * ======================================
     * 01. get device width
     * ======================================
     */
    let device_width = window.innerWidth;

    /**
     * ======================================
     * 02. preloader
     * ======================================
     */

    if ($("#preloader").length > 0) {
      $("#preloader").hide(300);
    }

    /**
     * ======================================
     * 03. sidebar slider
     * ======================================
     */
    var sidebarGameSlider = new Swiper(".sidebar-game-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      direction: "vertical",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });

    /**
     * ======================================
     * 04. custom cursor
     * ======================================
     */
    if ($(".mouseCursor").length > 0) {
      function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "button:not(.not-cursor), a:not(.not-cursor), .cursor-pointer",
                function () {
                  e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "button, a, .cursor-pointer",
                function () {
                  ($(this).is("a", "button") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");

            // text view cursor
            $("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
              "mouseenter",
              function () {
                $(".mouseCursor").addClass("cursor-big");
              }
            );

            $("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
              "mouseleave",
              function () {
                $(".mouseCursor").removeClass("cursor-big");
              }
            );

            // drag cursor
            $(".draggable-cursor").on("mouseenter", function () {
              $(".mouseCursor").addClass("drag-cursor");
            });

            $(".draggable-cursor").on("mouseleave", function () {
              $(".mouseCursor").removeClass("drag-cursor");
            });

            // view cursor
            $(".viewable-cursor").on("mouseenter", function () {
              $(".mouseCursor").addClass("view-cursor");
            });

            $(".viewable-cursor").on("mouseleave", function () {
              $(".mouseCursor").removeClass("view-cursor");
            });

            // no cursor
            $(".not-cursor").on("mouseenter", function () {
              $(".mouseCursor").addClass("not-cursor-outer");
            });

            $(".not-cursor").on("mouseleave", function () {
              $(".mouseCursor").removeClass("not-cursor-outer");
            });
          }
        }
      }
      itCursor();
    }

    /**
     * ======================================
     * 05. scroll to top with progress
     * ======================================
     */
    if ($(".progress-wrap").length > 0) {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).on("scroll", updateProgress);

      var lastScrollTop = 0;
      var delta = 0;
      $(window).on("scroll", function () {
        var currentScroll = $(this).scrollTop();

        if (Math.abs(lastScrollTop - currentScroll) <= delta) return;

        if (currentScroll > lastScrollTop) {
          $(".progress-wrap").removeClass("active-progress");
        } else {
          $(".progress-wrap").addClass("active-progress");
        }

        if (currentScroll === 0) {
          $(".progress-wrap").removeClass("active-progress");
        }

        lastScrollTop = currentScroll;
      });

      var duration = 800;
      $(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    }

    /**
     * ======================================
     * 06. data background
     * ======================================
     */
    $("[data-background]").each(function () {
      var backgroundImages = $(this).attr("data-background").split(",");
      var cssValue = backgroundImages
        .map(function (image) {
          return 'url("' + image.trim() + '")';
        })
        .join(",");

      $(this).css("background-image", cssValue);
    });

    /**
     * ======================================
     * 07. stroked text
     * ======================================
     */
    $(".stroked-text").each(function () {
      var originalText = $(this).text();
      $(this).attr("data-text", originalText);
    });

    /**
     * ======================================
     * 08. open search box
     * ======================================
     */
    if ($(".search-popup").length > 0) {
      $(".open-search").on("click", function () {
        $("body").addClass("search-active body-active");
      });

      $(".close-search").on("click", function () {
        $("body").removeClass("search-active body-active");
      });
    }

    /**
     * ======================================
     * 09. open offcanvas nav
     * ======================================
     */

    $(".nftg-open-modal").on("click", function () {
      $(".nftg-open-modal").not($(this)).removeClass("nftg-open-modal-active");
      $(this).toggleClass("nftg-open-modal-active");
      $(".nftg-modal-body")
        .not($(this).next(".nftg-modal-body"))
        .removeClass("nftg-modal-body-active");
      $(this).next(".nftg-modal-body").toggleClass("nftg-modal-body-active");
    });

    $(".nftg-child-modal").on("click", function () {
      $(".nftg-child").not($(this).next()).removeClass("nftg-child-active");
      $(this).next(".nftg-child").toggleClass("nftg-child-active");
    });

    $(".nftg-child button").on("click", function () {
      $(".nftg-child").removeClass("nftg-child-active");
    });

    $(document).on("click", function (e) {
      if (!$(e.target).closest(".nftg-modal-wrapper").length) {
        $(".nftg-modal-body").removeClass("nftg-modal-body-active");
        $(".nftg-open-modal").removeClass("nftg-open-modal-active");
      }

      if ($(e.target).closest(".nftg-child-wrapper").length === 0) {
        $(".nftg-child").removeClass("nftg-child-active");
      }

      if ($(e.target).closest(".wallet-authentication").length === 0) {
        $(".wallet-modal").removeClass("wallet-modal-active");
        $("body").removeClass("body-active");
      }

      if ($(e.target).closest(".chatbox").length === 0) {
        $(".chatbox__sidebar").removeClass("chatbox__sidebar-active");
        $(".chatbox-backdrop").removeClass("chatbox-backdrop-active");
      }
    });

    $(".navbar__item:not(.nftg-modal-wrapper)").on("mouseenter", function () {
      $(".nftg-modal-body").removeClass("nftg-modal-body-active");
      $(".nftg-open-modal").removeClass("nftg-open-modal-active");
    });

    /**
     * ======================================
     * 10. authentication with wallet
     * ======================================
     */
    $(".open-wallet-modal").on("click", function () {
      $(".wallet-modal").toggleClass("wallet-modal-active");
      $("body").toggleClass("body-active");
    });

    $(".close-wallet-modal, .wallet-modal-body-inner button").on(
      "click",
      function () {
        $(".wallet-modal").removeClass("wallet-modal-active");
        $("body").removeClass("body-active");
      }
    );

    $(".custom-tab").fadeOut(0);

    $(".open-custom").on("click", function () {
      $(".oauth-tab").fadeOut(0);
      $(".custom-tab").fadeIn(0);
    });

    $(".go-back").on("click", function () {
      $(".oauth-tab").fadeIn(0);
      $(".custom-tab").fadeOut(0);
    });

    /**
     * ======================================
     * 11. chatbox
     * ======================================
     */
    if ($(".chat-box").length > 0) {
      var chatBox = $(".chat-box");
      chatBox.scrollTop(chatBox[0].scrollHeight);
    }

    $(".open-chatlist").on("click", function () {
      $(".chatbox__sidebar").toggleClass("chatbox__sidebar-active");
      $(".chatbox-backdrop").addClass("chatbox-backdrop-active");
    });

    $(".close-chatlist, .chatbox-backdrop, .chatbox__list-single").on(
      "click",
      function () {
        $(".chatbox__sidebar").removeClass("chatbox__sidebar-active");
        $(".chatbox-backdrop").removeClass("chatbox-backdrop-active");
      }
    );

    /**
     * ======================================
     * 12. faq
     * ======================================
     */

    $(".faq__tab-single").hide();
    $(".faq__tab-single:first").show();

    $(".faq-tab-btn").on("click", function () {
      $(".faq-tab-btn").removeClass("active");
      $(this).addClass("active");
      $(".faq__tab-single").hide();
      var target = $(this).data("target");
      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 13. toggle password
     * ======================================
     */
    $(".show-pass").each(function () {
      $(this).on("click", function () {
        var passwordField = $(this).next("input");
        if (passwordField.attr("type") === "password") {
          passwordField.attr("type", "text");
          $(this).removeClass("ti-eye-off").addClass("ti-eye");
        } else {
          passwordField.attr("type", "password");
          $(this).removeClass("ti-eye").addClass("ti-eye-off");
        }
      });
    });

    /**
     * ======================================
     * 14. offcanvas cart
     * ======================================
     */
    $(".open-cart").on("click", function () {
      $(".sidebar-cart").addClass("sidebar-cart-active");
      $(".cart-backdrop").addClass("cart-backdrop-active");
      $(this).addClass("cart-ic-active");
      $("body").addClass("body-active");
    });

    $(".close-cart, .cart-backdrop").on("click", function () {
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");
      $(".open-cart").removeClass("cart-ic-active");
      $("body").removeClass("body-active");
    });

    var countItem = $(".cart-item-single").length;
    $(".count-item").text(countItem);
    $(".empty-cart").hide();

    // calculate total price
    function calculateTotalPrice() {
      var totalPrice = 0;
      $(".cart-item-single").each(function () {
        var quantity = parseInt($(this).find(".item-quantity").text(), 10);
        var price = parseFloat($(this).find(".item-price").text());
        totalPrice += quantity * price;
      });
      $(".total-price").text(totalPrice.toFixed(2));
    }

    $(".cart-item-single").each(function () {
      var quantity = parseInt($(this).find(".item-quantity").text(), 10);
      // increase item
      $(this)
        .find(".quantity-increase")
        .on("click", function () {
          if (quantity < 100) {
            quantity++;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        });

      // decrease item
      $(this)
        .find(".quantity-decrease")
        .on("click", function () {
          if (quantity > 0) {
            quantity--;
            $(this).siblings(".item-quantity").text(quantity);
            calculateTotalPrice();
          }
        });

      // delete item
      $(this)
        .find(".delete-item")
        .on("click", function () {
          $(this).closest(".cart-item-single").hide();
          $(this).parent().find(".item-quantity").text(0);
          calculateTotalPrice();
          $(this).parent().removeClass("cart-item-single");
          var countItem = $(".cart-item-single").length;
          $(".count-item").text(countItem);

          if (countItem > 0) {
            $(".empty-cart").hide();
          } else {
            $(".empty-cart").show();
          }
        });
    });

    /**
     * ======================================
     * 15. mobile menu
     * ======================================
     */

    $(".open-offcanvas-nav").on("click", function () {
      $(this).toggleClass("open-offcanvas-nav-active");
    });

    if ($(".mobile-menu").length > 0) {
      var mobileMenuContent = $(".navbar__menu").html();
      $(".mobile-menu__list").append(mobileMenuContent);

      $(".mobile-menu .navbar__dropdown-label").on("click", function () {
        $(this)
          .parent()
          .siblings()
          .find(
            ".navbar__sub-menu, .nftg-modal-body, .navbar__sub-menu__nested"
          )
          .slideUp(300);

        $(this)
          .parent()
          .siblings()
          .find(".navbar__dropdown-label")
          .removeClass("navbar__item-active");
        $(this)
          .siblings(".navbar__sub-menu, .nftg-modal-body")
          .slideToggle(300);
        $(this).toggleClass("navbar__item-active");
      });
    }

    $(".open-mobile-menu").on("click", function () {
      $(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");
      $(".nav-fade").each(function (i) {
        $(this).css("animation-delay", 0.2 * 1 * i + "s");
      });

      $(".mobile-menu").addClass("show-menu");
      $(".mobile-menu__wrapper").removeClass("nav-fade-active");
      $("body").addClass("body-active");
    });

    $(".close-mobile-menu, .mobile-menu__backdrop").on("click", function () {
      setTimeout(function () {
        $(".mobile-menu").removeClass("show-menu");
      }, 900);
      setTimeout(function () {
        $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      }, 1100);
      setTimeout(function () {
        $(".mobile-menu .navbar__sub-menu").slideUp(300);
        $(".mobile-menu .navbar__dropdown-label").removeClass(
          "navbar__item-active"
        );
      }, 1200);

      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $("body").removeClass("body-active");
      $(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");
    });

    /**
     * ======================================
     * 16. add active class to the current link
     * ======================================
     */
    function dynamicCurrentMenuClass(selector) {
      let FileName = window.location.href.split("/").reverse()[0];

      selector.find("li").removeClass("active");
      selector
        .find(".navbar__dropdown-label")
        .removeClass("navbar__item-active");

      selector.find("li").each(function () {
        let anchor = $(this).find("a");
        if ($(anchor).attr("href") === FileName) {
          $(this).addClass("active");
        }
      });

      const activeDropdownItem = selector.find(".navbar__sub-menu .active");
      if (activeDropdownItem.length) {
        activeDropdownItem.parents("li").addClass("active");
      }

      selector.find("li").each(function () {
        if ($(this).find(".active").length) {
          $(this).addClass("active");
        }
      });

      if (FileName === "") {
        selector.find('li:has(a[href="index.html"])').addClass("active");
      }
    }
    if ($(".header").length) {
      dynamicCurrentMenuClass($(".header"));
    }

    /**
     * ======================================
     * 17. on window resize functions
     * ======================================
     */
    $(window).on("resize", function () {
      $("body").removeClass("body-active search-active");

      // mobile menu
      $(".mobile-menu").removeClass("show-menu");
      $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
      $(".mobile-menu__wrapper").addClass("nav-fade-active");
      $(".mobile-menu .navbar__dropdown-label").removeClass(
        "navbar__item-active"
      );
      $(".mobile-menu .navbar__sub-menu").slideUp(300);
      $(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");

      // sidebar cart
      $(".sidebar-cart").removeClass("sidebar-cart-active");
      $(".cart-backdrop").removeClass("cart-backdrop-active");

      // modal
      $(".nftg-open-modal").removeClass("nftg-open-modal-active");
      $(".nftg-modal-body").removeClass("nftg-modal-body-active");
      $(".cart-ic").removeClass("cart-ic-active");

      // chatbox
      $(".chatbox__sidebar").removeClass("chatbox__sidebar-active");
      $(".chatbox-backdrop").removeClass("chatbox-backdrop-active");
    });

    /**
     * ======================================
     * 18. footer copyright year
     * ======================================
     */
    if ($("#copyrightYear").length > 0) {
      $("#copyrightYear").text(new Date().getFullYear());
    }

    /**
     * ======================================
     * 19. banner slider
     * ======================================
     */
    var bannerSlider = new Swiper(".banner__slider-wrapper", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".banner-pagination",
        clickable: true,
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-40%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });

    /**
     * ======================================
     * 20. feature slider
     * ======================================
     */
    var featureSlider = new Swiper(".feature-slider", {
      loop: false,
      center:true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 22,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-feature",
        prevEl: ".prev-feature",
      },
      pagination: {
        el: ".feature-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

        /**
     * ======================================
     * 20. feature slider
     * ======================================
     */
        var devicesSlider = new Swiper(".devices-slider", {
          loop: false,
          speed: 1000,
          slidesPerView: 1,
          spaceBetween: 30,
          freeMode: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: ".next-devices",
            prevEl: ".prev-devices",
          },
          pagination: {
            el: ".devices-slider-progress",
            type: "progressbar",
          },
          breakpoints: {
            500: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 4,
            },
          },
        });
    

    /**
     * ======================================
     * 21. tournament details tab
     * ======================================
     */

    $(".tournament-tab__single").hide();
    $(".tournament-tab__single:first").show();

    $(".tournament-tab-btn").on("click", function () {
      $(".tournament-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.tournament-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".tournament-tab__single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 21. prize details
     * ======================================
     */
    $(".details-prize-btn, .open-match-popup").magnificPopup({
      type: "inline",
      midClick: true,
      mainClass: "mfp-fade",
    });

    /**
     * ======================================
     * 22. match details tab
     * ======================================
     */

    $(".match-tab-item").hide();
    $(".match-tab-item:first").show();

    $(".match-tab-btn").on("click", function () {
      $(".match-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.match-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".match-tab-item").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 23. tournament sidebar slider
     * ======================================
     */
    var tournamentGameSlider = new Swiper(".tournament-game-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 2,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        500: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 24. leaderboard tab
     * ======================================
     */

    $(".leaderboard-tab__item-single").hide();
    $(".leaderboard-tab__item-single:first").show();

    $(".leaderboard-tab-btn").on("click", function () {
      $(".leaderboard-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.leaderboard-tab-btn[data-target="' + target + '"]').addClass(
        "active"
      );
      $(".leaderboard-tab__item-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 25. feature slider two
     * ======================================
     */
    var featureSliderTwo = new Swiper(".feature-slider-two", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 22,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-feature",
        prevEl: ".prev-feature",
      },
      pagination: {
        el: ".feature-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 26. countdown
     * ======================================
     */
    var endDate = new Date("2025-07-01T00:00:00").getTime();

    var countdown = setInterval(function () {
      var now = new Date().getTime();

      var distance = endDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $(".day").text(days);
      $(".hour").text(hours);
      $(".minute").text(minutes);
      $(".second").text(seconds);

      if (distance < 0) {
        clearInterval(countdown);
        $(".day").text("00");
        $(".hour").text("00");
        $(".minute").text("00");
        $(".second").text("00");
      }
    }, 1000);

    /**
     * ======================================
     * 27. odometer counter
     * ======================================
     */
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    /**
     * ======================================
     * 28. streamer slider
     * ======================================
     */
    var streamerSlider = new Swiper(".streamer-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 22,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-streamer",
        prevEl: ".prev-streamer",
      },
      pagination: {
        el: ".streamer-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1900: {
          slidesPerView: 4,
        },
      },
    });
    
        /**
     * ======================================
     * 28. Gaming Devices slider
     * ======================================
     */
        var gamingSlider = new Swiper(".GamingDevices-slider", {
          loop: true,
          speed: 1000,
          center:true,
          slidesPerView: 1,
          spaceBetween: 30,
          freeMode: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: ".next-streamer",
            prevEl: ".prev-streamer",
          },
          pagination: {
            el: ".streamer-slider-progress",
            type: "progressbar",
          },
          breakpoints: {
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1900: {
              slidesPerView: 4,
            },
          },
        });

    /**
     * ======================================
     * 29. streamer slider two
     * ======================================
     */
    var streamerSliderTwo = new Swiper(".streamer-slider-two", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 22,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-streamer",
        prevEl: ".prev-streamer",
      },
      pagination: {
        el: ".streamer-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1900: {
          slidesPerView: 3,
        },
      },
    });
    /**
     * ======================================
     * 30. last stream slider
     * ======================================
     */

    var lastStream = new Swiper(".last-streams-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      freeMode: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-stream",
        prevEl: ".prev-stream",
      },
      pagination: {
        el: ".stream-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1900: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 31. choose slider
     * ======================================
     */

    var chooseSlider = new Swiper(".choose-slider", {
      loop: false,
      speed: 1000,
      center:true,
      slidesPerView: 1,
      spaceBetween: 24,
      freeMode: true,
      autoplay:false,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // },
      navigation: {
        nextEl: ".next-choose",
        prevEl: ".prev-choose",
      },
      breakpoints: {
        500: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 8,
        },
        1600: {
          slidesPerView: 8,
        },
      },
    });

    /**
     * ======================================
     * 32. trending two slider
     * ======================================
     */

    var trendingNftSlider = new Swiper(".trending-nft-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-trend",
        prevEl: ".prev-trend",
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 3,
        },
        2000: {
          slidesPerView: 4,
        },
      },
    });

    /**
     * ======================================
     * 33. video popup
     * ======================================
     */
    if (document.querySelector(".open-video-popup") !== null) {
      $(".open-video-popup").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    /**
     * ======================================
     * 34. package tab
     * ======================================
     */

    $(".package__tab-single").hide();
    $(".package__tab-single:first").show();

    $(".package-btn-single").on("click", function () {
      $(".package-btn-single").removeClass("active");
      var target = $(this).data("target");
      $('.package-btn-single[data-target="' + target + '"]').addClass("active");
      $(".package__tab-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 35. package slider
     * ======================================
     */

    var packageSlider = new Swiper(".package-slider", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-pack",
        prevEl: ".prev-pack",
      },
      pagination: {
        el: ".pack-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 36. avatar slider
     * ======================================
     */

    var avatarSlider = new Swiper(".package-slider-avatar", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-avatar",
        prevEl: ".prev-avatar",
      },
      pagination: {
        el: ".avatar-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 37. entity slider
     * ======================================
     */
    
    var entitySlider = new Swiper(".package-slider-entity", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-entity",
        prevEl: ".prev-entity",
      },
      pagination: {
        el: ".entity-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 38. equipment slider
     * ======================================
     */
    var equipmentSlider = new Swiper(".package-slider-equipment", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-equip",
        prevEl: ".prev-equip",
      },
      pagination: {
        el: ".equip-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 39. land slider
     * ======================================
     */
    var landSlider = new Swiper(".package-slider-land", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-land",
        prevEl: ".prev-land",
      },
      pagination: {
        el: ".land-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 40. avatar two slider
     * ======================================
     */
    var avatarTwoSlider = new Swiper(".package-slider-avatar-two", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-avata",
        prevEl: ".prev-avata",
      },
      pagination: {
        el: ".avata-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 41. build experience slider
     * ======================================
     */
    var buildExperience = new Swiper(".package-slider-experience", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-experience",
        prevEl: ".prev-experience",
      },
      pagination: {
        el: ".experience-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 42. enhance avatar slider
     * ======================================
     */
    var enhanceAvatar = new Swiper(".avatar-slider", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-enhance-avatar",
        prevEl: ".prev-enhance-avatar",
      },
      pagination: {
        el: ".enhance-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 43. new assets slider
     * ======================================
     */
    var newAssets = new Swiper(".assets-slider", {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-asset",
        prevEl: ".prev-asset",
      },
      pagination: {
        el: ".asset-slider-progress",
        type: "progressbar",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });

    /**
     * ======================================
     * 44. partner slider
     * ======================================
     */
    var partnerSlider = new Swiper(".partner-slider", {
      loop: false,
      speed: 1000,
      slidesPerView: "auto",
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-partner",
        prevEl: ".prev-partner",
      },
      pagination: {
        el: ".partner-slider-progress",
        type: "progressbar",
      },
    });

    /**
     * ======================================
     * 45. nft details slider
     * ======================================
     */

    var nftThumbnail = new Swiper(".nft-details-thumb-slider", {
      slidesPerView: 2,
      speed: 1000,
      loop: true,
      spaceBetween: 24,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        375: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 4,
        },
        992: {
          direction: "vertical",
          slidesPerView: 4,
        },
      },
    });

    var nftSlider = new Swiper(".nft-details-slider", {
      loop: true,
      speed: 1000,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });

    nftSlider.controller.control = nftThumbnail;
    nftThumbnail.controller.control = nftSlider;

    /**
     * ======================================
     * 46. nft details toggle
     * ======================================
     */
    $(".details-btn").on("click", function () {
      $(this).toggleClass("active");
      $(this).parent().next(".details__single-content").toggle();
    });

    /**
     * ======================================
     * 47. activity tab
     * ======================================
     */

    $(".activity-details__single").hide();
    $(".activity-details__single:first").show();

    $(".activity-details-btn").on("click", function () {
      $(".activity-details-btn").removeClass("active");
      $(this).addClass("active");
      $(".activity-details__single").hide();
      var target = $(this).data("target");
      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 48. profile tab
     * ======================================
     */

    $(".profile-tab-single").hide();
    $(".profile-tab-single:first").show();

    $(".profile-tab-btn").on("click", function () {
      $(".profile-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.profile-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".profile-tab-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 49. progress bar
     * ======================================
     */
    function progress_bar() {
      var speed = 30;
      var items = $(".progress-bar__wrapper").find(".single-progress");

      items.each(function () {
        $(this).isInViewport(function (status) {
          var item = $(this).find(".progress-bar");
          var itemValue = item.data("progress");
          var i = 0;
          var value = $(this).find(".progress-value");

          var count = setInterval(function () {
            if (i <= itemValue) {
              var iStr = i.toString();
              item.css("width", iStr + "%");
              value.html(iStr + "%");
              i++;
            } else {
              clearInterval(count);
            }
          }, speed);
        });
      });
    }

    progress_bar();

    /**
     * ======================================
     * 50. performance tab
     * ======================================
     */

    $(".performance-item-single").hide();
    $(".performance-item-single:first").show();

    $(".performance-tag-single").on("click", function () {
      $(".performance-tag-single").removeClass("active");
      var target = $(this).data("target");
      $('.performance-tag-single[data-target="' + target + '"]').addClass(
        "active"
      );
      $(".performance-item-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 51. game details nft slider
     * ======================================
     */
    var relatedNftSlider = new Swiper(".related-nft-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: ".nft-slider-progress",
        type: "progressbar",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-nft",
        prevEl: ".prev-nft",
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1800: {
          slidesPerView: 4,
        },
      },
    });

    /**
     * ======================================
     * 52. balance chart
     * ======================================
     */
    var balanceChartOptions = {
      colors: ["#FAAB07"],
      chart: {
        type: "area",
        height: 150,
        width: "100%",
        zoom: false,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      annotations: {
        yaxis: [],
        xaxis: [],
      },
      series: [
        {
          name: "Balance",
          data: [400, 350, 300, 350, 300, 350, 300, 400, 350, 300, 250, 300],
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        colors: ["#000000"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      markers: {
        hover: {
          size: 6,
          strokeWidth: 4,
          colors: ["#ffffff"],
          strokeColors: ["#45f882"],
        },
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
      xaxis: {
        show: false,
        axisTicks: {
          show: false,
        },
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      yaxis: {
        show: false,
        opposite: false,
        labels: {
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      grid: {
        show: false,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        show: false,
        horizontalAlign: "left",
      },
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              maxWidth: "100%",
              height: 150,
              sparkline: {
                enabled: false,
              },
            },
          },
        },
      ],
    };

    if ($("#balanceChart").length > 0) {
      var chart = new ApexCharts(
        document.querySelector("#balanceChart"),
        balanceChartOptions
      );
      chart.render();
    }

    /**
     * ======================================
     * 53. profit tab
     * ======================================
     */

    $(".profit-item-single").hide();
    $(".profit-item-single:first").show();

    $(".profit-btn-single").on("click", function () {
      $(".profit-btn-single").removeClass("active");
      var target = $(this).data("target");
      $('.profit-btn-single[data-target="' + target + '"]').addClass("active");
      $(".profit-item-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 54. investment chart
     * ======================================
     */
    var profileChartOptions = {
      series: [
        {
          name: "ROI",
          data: [331, 440, 328, 251, 342, 209, 400],
        },
        {
          name: "Profit",
          data: [142, 232, 245, 132, 234, 442, 500],
        },
      ],
      chart: {
        height: 250,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        show: false,
        type: "datetime",
        labels: {
          show: false,
        },
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#FFFFFF",
          },
        },
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
    };

    if ($("#profileChart").length > 0) {
      var profileChart = new ApexCharts(
        document.querySelector("#profileChart"),
        profileChartOptions
      );
      profileChart.render();
    }

    /**
     * ======================================
     * 55. profit chart
     * ======================================
     */
    var profitChartOptions = {
      series: [
        {
          name: "ROI",
          data: [142, 232, 245, 132, 234, 442, 500],
        },
        {
          name: "Profit",

          data: [331, 440, 328, 251, 342, 209, 400],
        },
      ],
      chart: {
        height: 250,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        show: false,
        type: "datetime",
        labels: {
          show: false,
        },
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#FFFFFF",
          },
        },
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
    };

    if ($("#profitChart").length > 0) {
      var profitChart = new ApexCharts(
        document.querySelector("#profitChart"),
        profitChartOptions
      );
      profitChart.render();
    }

    /**
     * ======================================
     * 56. private profile tab
     * ======================================
     */
    $(".private-item__single").hide();
    $(".private-item__single:first").show();

    $(".private-tab-btn").on("click", function () {
      $(".private-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.private-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".private-item__single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 57. private profile sidebar tab
     * ======================================
     */

    $(".private-content__single").hide();
    $(".private-content__single:first").show();

    $(".private-sidebar-tab-btn").on("click", function () {
      $(".private-sidebar-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.private-sidebar-tab-btn[data-target="' + target + '"]').addClass(
        "active"
      );
      $(".private-content__single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 58. deposit amount
     * ======================================
     */
    var firstValue = $(".input-balance-single")
      .first()
      .text()
      .replace("$", "")
      .replace("USD", "")
      .trim();
    $("#depositAmountFlat").val(parseFloat(firstValue));

    $(".input-balance-single").on("click", function () {
      $(".input-balance-single").removeClass("active");
      $(this).addClass("active");
      var selectedValue = $(this)
        .text()
        .replace("$", "")
        .replace("USD", "")
        .trim();
      $("#depositAmountFlat").val(parseFloat(selectedValue));
    });

    /**
     * ======================================
     * 59. deposit tab
     * ======================================
     */

    $(".deposit-tab__single").hide();
    $(".deposit-tab__single:first").show();

    $(".deposit-tab-btn").on("click", function () {
      $(".deposit-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.deposit-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".deposit-tab__single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 60. vault tab
     * ======================================
     */

    $(".vault-tab-single").hide();
    $(".vault-tab-single:first").show();

    $(".vault-tab-btn").on("click", function () {
      $(".vault-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.vault-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".vault-tab-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 61. transaction tab
     * ======================================
     */

    $(".transaction-tab-single").hide();
    $(".transaction-tab-single:first").show();

    $(".transaction-tab-btn").on("click", function () {
      $(".transaction-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.transaction-tab-btn[data-target="' + target + '"]').addClass(
        "active"
      );
      $(".transaction-tab-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 62. withdraw tab
     * ======================================
     */

    $(".withdraw-tab__single").hide();
    $(".withdraw-tab__single:first").show();

    $(".withdraw-tab-btn").on("click", function () {
      $(".withdraw-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.withdraw-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".withdraw-tab__single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 63. game details slider
     * ======================================
     */
    var gameDetails = new Swiper(".game-details-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 24,
      watchSlidesProgress: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-40%", 0, -1],
        },
        next: {
          translate: ["101%", 0, 0],
        },
      },
    });

    var gameDetailsThumb = new Swiper(".game-details-thumb", {
      loop: true,
      speed: 1000,
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 24,
      slideToClickedSlide: true,
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 5,
        },
      },
    });
    gameDetails.controller.control = gameDetailsThumb;
    gameDetailsThumb.controller.control = gameDetails;

    /**
     * ======================================
     * 64. game details nft slider
     * ======================================
     */
    var gameNftSlider = new Swiper(".game-details-nft-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: ".nft-slider-progress",
        type: "progressbar",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-nft",
        prevEl: ".prev-nft",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1800: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 65. related games slider
     * ======================================
     */
    var gameSlider = new Swiper(".game-details-game-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: ".game-slider-progress",
        type: "progressbar",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-game",
        prevEl: ".prev-game",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1800: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 66. winner widget slider
     * ======================================
     */
    var recentWinner = new Swiper(".winner-widget-slider", {
      loop: true,
      speed: 1000,
      spaceBetween: 24,
      slidesPerView: 3,
      slidesPerGroup: 3,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".recent-winner-pagination",
        clickable: true,
      },
      breakpoints: {
        380: {
          slidesPerView: 4,
        },
        560: {
          slidesPerView: 6,
        },
        700: {
          slidesPerView: 8,
        },
        1400: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
        1800: {
          slidesPerView: 5,
        },
      },
    });

    /**
     * ======================================
     * 67. product details tab
     * ======================================
     */
    $(".leaderboard-widget-single").hide();
    $(".leaderboard-widget-single:first").show();
    $(".l-w-btn").on("click", function () {
      $(".l-w-btn").removeClass("l-w-btn-active");
      $(this).addClass("l-w-btn-active");
      $(".leaderboard-widget-single").hide();
      var activePlan = $(this).data("target");
      $(activePlan).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 68. social link active on hover
     * ======================================
     */
    $(".social").each(function () {
      $(this)
        .find(".social-btn")
        .on("mouseover", function () {
          $(this)
            .closest(".social")
            .find(".social-btn")
            .removeClass("social-btn-active");
          $(this).addClass("social-btn-active");
        });
    });

    /**
     * ======================================
     * 69. winner widget slider
     * ======================================
     */
    var gameSlider = new Swiper(".game-slider", {
      loop: true,
      speed: 1000,
      spaceBetween: 24,
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".game-slider-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    /**
     * ======================================
     * 70. team active on hover
     * ======================================
     */
    $(".team").each(function () {
      $(this)
        .find(".team__single")
        .on("mouseover", function () {
          $(this)
            .closest(".team")
            .find(".team__single")
            .removeClass("team__single-active");
          $(this).addClass("team__single-active");
        });
    });

    /**
     * ======================================
     * 71. team active on hover
     * ======================================
     */
    $(".check-group .check-mark-wrapper input").each(function () {
      if ($(this).is(":checked")) {
        $(this).closest(".check-group").addClass("checked");
      } else {
        $(this).closest(".check-group").removeClass("checked");
      }
    });
    $(".check-group .check-mark-wrapper input").on("change", function () {
      if ($(this).is(":checked")) {
        $(this).closest(".check-group").addClass("checked");
      } else {
        $(this).closest(".check-group").removeClass("checked");
      }
    });

    $(".check-group .check-mark-wrapper input[type='radio']").on(
      "change",
      function () {
        $(this)
          .closest(".check-group-wrapper")
          .find(".check-group")
          .removeClass("checked");

        if ($(this).is(":checked")) {
          $(this).closest(".check-group").addClass("checked");
        }
      }
    );

    $(".check-group .check-mark-wrapper input[type='radio']:checked").each(
      function () {
        $(this).closest(".check-group").addClass("checked");
      }
    );

    document.querySelectorAll(".range__slider").forEach(function (el) {
      el.oninput = function () {
        var valPercent =
          (el.valueAsNumber - parseInt(el.min)) /
          (parseInt(el.max) - parseInt(el.min));
        var style =
          "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
          valPercent +
          ", #13d487), color-stop(" +
          valPercent +
          ", #505D6A30));";
        el.style = style;
      };
      el.oninput();
    });
    function updateRatingValue(value) {
      $(".rating-value").text(value);
    }
    var initialValue = $("#rangeSlider").val();
    updateRatingValue(initialValue);

    $("#rangeSlider").on("input change", function () {
      var currentValue = $(this).val();
      updateRatingValue(currentValue);
    });

    function updateRatingValueTwo(value) {
      $(".user-rating-value").text(value);
    }
    var initialValueTwo = $("#userRange").val();
    updateRatingValueTwo(initialValueTwo);

    $("#userRange").on("input change", function () {
      var currentValueTwo = $(this).val();
      updateRatingValueTwo(currentValueTwo);
    });

    /**
     * ======================================
     * 72. nice select
     * ======================================
     */
    $("select").niceSelect();

    /**
     * ======================================
     * 73. community active on hover
     * ======================================
     */
    $(".community-two").each(function () {
      $(this)
        .find(".community-two__single")
        .on("mouseover", function () {
          $(this)
            .closest(".community-two")
            .find(".community-two__single")
            .removeClass("community-two__single-active");
          $(this).addClass("community-two__single-active");
        });
    });

    /**
     * ======================================
     * 74. social link active on hover
     * ======================================
     */

    $(".comment-single").each(function () {
      $(this)
        .find(".reply-button button")
        .on("click", function () {
          var $currentComment = $(this).closest(".comment-single");
          $(".comment-single .reply-comment")
            .not($currentComment.find(".reply-comment"))
            .slideUp();
          $currentComment.find(".reply-comment").slideToggle();
          $(".comment-single .reply-button button")
            .not(this)
            .removeClass("active");
          $(this).toggleClass("active");
        });
    });

    /**
     * ======================================
     * 75. vanilla tilt animations
     * ======================================
     */

    let Vantilt = document.querySelectorAll(".van-tilt");

    if (Vantilt) {
      VanillaTilt.init(document.querySelectorAll(".van-tilt"), {
        max: 5,
        speed: 3000,
      });
    }

    /**
     * ======================================
     * 76. register gsap
     * ======================================
     */
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

    /**
     * ======================================
     * 77. gsap null config
     * ======================================
     */
    gsap.config({
      nullTargetWarn: false,
      debug: false,
    });

    /**
     * ======================================
     * 78.  banner animation
     * ======================================
     */
    if ($(".banner").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".sword img", {
          y: "180px",
          opacity: 0.4,
          duration: 3,
        });
        tl.to(".banner__thumb img", {
          transform: "scale(0.7)",
          y: "100px",
          opacity: 0.4,
          duration: 3,
        });
      }
    }

    /**
     * ======================================
     * 79.  countdown animation
     * ======================================
     */
    if ($(".countdown").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".countdown",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".plane img", {
          x: "60px",
          opacity: 0.4,
          duration: 3,
        });
        tl.to(".cartoon img", {
          y: "100px",
          opacity: 0.4,
          duration: 3,
        });
      }
    }

    /**
     * ======================================
     * 80.  about animation
     * ======================================
     */
    if ($(".about-overview").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-overview",
            start: "top top",
            end: "+=10%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(".plane img", {
          x: "80px",
          opacity: 0.4,
          duration: 3,
        });
      }
    }

    /**
     * ======================================
     * 81.  about poster
     * ======================================
     */
    if ($(".about-poster").length > 0) {
      if (device_width >= 768) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-poster",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: true,
          },
        });
        tl.to(".about-poster__content", {
          y: "-200px",
          duration: 3,
        });
      }
    }

    /**
     * ======================================
     * 82. parallax image with gsap
     * ======================================
     */
    var imageParallax = document.querySelectorAll(".parallax-image");
    if (imageParallax.length > 0) {
      $(".parallax-image").each(function () {
        $(this).wrap(
          '<div class="parallax-image-wrap"><div class="parallax-image-inner"></div></div>'
        );
        $(".parallax-image-wrap").css({
          overflow: "hidden",
        });

        var $animImageParallax = $(this);
        var $aipWrap = $animImageParallax.parents(".parallax-image-wrap");
        var $aipInner = $aipWrap.find(".parallax-image-inner");

        let tl_ImageParallax = gsap.timeline({
          scrollTrigger: {
            trigger: $aipWrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onEnter: () => animImgParallaxRefresh(),
          },
        });
        tl_ImageParallax.to($animImageParallax, {
          yPercent: 40,
          ease: "none",
        });

        function animImgParallaxRefresh() {
          tl_ImageParallax.scrollTrigger.refresh();
        }

        let tl_aipZoomIn = gsap.timeline({
          scrollTrigger: {
            trigger: $aipWrap,
            start: "top 99%",
          },
        });
        tl_aipZoomIn.from($aipInner, {
          duration: 1.5,
          autoAlpha: 0,
          scale: 1.2,
          ease: Power2.easeOut,
          clearProps: "all",
        });
      });
    }

    /**
     * ======================================
     * 83. fade top gsap animation
     * ======================================
     */
    if ($(".fade-wrapper").length > 0) {
      $(".fade-wrapper").each(function () {
        var section = $(this);
        var fadeItems = section.find(".fade-top");

        fadeItems.each(function (index, element) {
          var delay = index * 0.2;

          gsap.set(element, {
            opacity: 0,
            y: 160,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: function () {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });
      });
    }

    /**
     * ======================================
     * 84. fade right gsap animation
     * ======================================
     */
    if ($(".fade-wrapper").length > 0) {
      $(".fade-wrapper").each(function () {
        var section = $(this);
        var fadeItems = section.find(".fade-right");

        fadeItems.each(function (index, element) {
          var delay = index * 0.2;

          gsap.set(element, {
            opacity: 0,
            x: -100,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: function () {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });
      });
    }

    /**
     * ======================================
     * 85. fade left gsap animation
     * ======================================
     */
    if ($(".fade-wrapper").length > 0) {
      $(".fade-wrapper").each(function () {
        var section = $(this);
        var fadeItems = section.find(".fade-left");

        fadeItems.each(function (index, element) {
          var delay = index * 0.2;

          gsap.set(element, {
            opacity: 0,
            x: 160,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: function () {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });
      });
    }

    /**
     * ======================================
     * 86. appear down
     * ======================================
     */
    $(".appear-down").each(function () {
      const section = $(this);
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section[0],
            scrub: 1,
            start: "top bottom",
            end: "top center",
            markers: false,
          },
        }
      );
    });

    /**
     * ======================================
     * 87. title animation
     * ======================================
     */
    if ($(".title-animation").length > 0) {
      let char_come = gsap.utils.toArray(".title-animation");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 80%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 40,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "back.out",
        });
      });
    }

    /**
     * ======================================
     * 88. template options
     * ======================================
     */
    $(".open-color").on("click", function () {
      $(this).hide();
      $(".close-color").show();
      $(".color-icon").css("right", "280px");
      $(".color-palate-inner").css({
        right: "0",
      });
    });

    $(".close-color").on("click", function () {
      $(this).hide();
      $(".open-color").show();
      $(".color-icon").css("right", "0px");
      $(".color-palate-inner").css({
        right: "-280px",
      });
    });

    $(".animated-cursor").on("click", function () {
      $(".nftg-app, .nftg-app-alt").addClass("a-cursor");
    });

    $(".default-cursor").on("click", function () {
      $(".nftg-app, .nftg-app-alt").removeClass("a-cursor");
    });

    $(".sidebar-yes").on("click", function () {
      $(".nftg-app, .nftg-app-alt").removeClass("sidebar-remove");
    });

    $(".sidebar-no").on("click", function () {
      $(".nftg-app, .nftg-app-alt").addClass("sidebar-remove");
    });
  });
})(jQuery);
