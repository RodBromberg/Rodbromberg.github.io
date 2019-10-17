// superslides library
// used to set up slideshow photo effect
// also for fade animation
$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000
  });

  // reference .typed class
  // using typed.mind library
  // adds cursory typing effect with array of string
  // typeSpeed for typing speed, loop for continuous playback
  // startDelay so it doesnt type immediately
  // showcursor to false so it doesnt appear perpetually
  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Lifelong Student."],
    typeSpeed: 90,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      },
      1100: {
        items: 5
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;

  // grabbing a pixel value generated from scrolling through the page
  // based off the skillsSection position and the beginning scrolling position
  $(window).scroll(function() {
    console.log(
      "skillsTopOffset is " +
        (skillsTopOffset - 200) +
        " and pageYOffset is " +
        pageYOffset
    );

    if (this.window.pageYOffset > skillsTopOffset - $(window).height() + 220) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#333",
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  // $(".counter").each(function(element) {
  //   var element = $(this);
  //   var endVal = parseInt(element.text());

  //   element.countup(endVal);
  // });
});
