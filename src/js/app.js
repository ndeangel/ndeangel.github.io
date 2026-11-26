/* Hero animation (particles.js is loaded from assets/js/particles.min.js).
   Source for assets/js/main.js - rebuild with `npm run build:js`. */
document.addEventListener("DOMContentLoaded", function () {
  var hero = document.getElementById("particles-js");
  if (!hero || typeof particlesJS !== "function") {
    return;
  }

  // Respect the "reduce motion" setting of the visitor: draw the particles once, don't animate.
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* particlesJS(@dom-id, @params) */
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": !reduceMotion,
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      nb: 80
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": !reduceMotion,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // particles.js redraws 60 times per second forever, even when the hero is scrolled out of view.
  // Pause it while the hero is not visible (saves CPU / battery while reading the rest of the page).
  var pJS = window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS;
  if (pJS && !reduceMotion && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      window.cancelAnimationFrame(pJS.fn.drawAnimFrame);
      if (entries[entries.length - 1].isIntersecting) {
        pJS.fn.vendors.draw();
      }
    }).observe(hero);
  }
}, false);
