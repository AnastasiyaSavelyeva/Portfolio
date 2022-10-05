/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
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
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
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
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
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
  
  //Gsap
  gsap.to ('h1', {
    text: 'Привет!',
    duration: 1,
    delay: 1,
  })

  gsap.to ('h2', {
    text: 'Добро пожаловать в мое портфолио!',
    duration: 2,
    delay: 1.5,
  })

  gsap.to ('.developer', {
    text: 'FRONTEND-РАЗРАБОТЧИК.',
    repeat: -1,
    repeatDelay: 1,
    duration: 2,
    ease: "power1.out",
  })

  gsap.to ('.creater', {
    text: 'Создаю адаптивные, динамичные и функциональные сайты и приложения.',
    repeat: -1,
    repeatDelay: 1,
    duration: 3,
    ease: "power1.out",
    yoyo: true,
  })

  console.clear();
  gsap.config({ trialWarn: false });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#container", {
    "--target": "0%",
    ease: "none",
    scrollTrigger: {
      trigger: "#container",
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: 1
    }
  });
  
  gsap.from ('.element', {duration:1, delay:2, opacity:0, stagger:.3})
  gsap.fromTo('.cometa', {y:-150, x:50, opacity:.8}, {y:300, x:-800, opacity:0, duration:3, repeat: -1, repeatDelay: 7})
  gsap.from ('.laptop', {opacity:0, x:10, ease:'bounce', duration: 1.5, delay:3.5})
  gsap.from ('.icon_one', {opacity:1, rotate:360, x: 200, y:300, duration:1, delay:3.6, scale:0})
  gsap.from ('.icon_two', {opacity:1, rotate:360, x: 400, y:200, duration:1, delay:3.8, scale:0})
  gsap.from ('.icon_three', {opacity:1, rotate:360, x: -50, y:300, duration:1, delay:4, scale:0})