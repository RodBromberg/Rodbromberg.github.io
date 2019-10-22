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

  $(["[data-fancybox]"]).fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
  });

  var $grid = $(".grid").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
