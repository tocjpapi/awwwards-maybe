


const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1,
    infinite: false,
});

// Request animation frame loop for Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function animateContent() {
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 50%",
        scrub: true,
    }
    
});


tl.to(".main", {
    opacity: 0,
    ease: "none",
});




    
document.querySelectorAll('.img').forEach((img, index) => {
  gsap.to(img.querySelector("img"), {
      yPercent: 190,
      ease: "none",
      scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "+=10000", // extend the end point to ensure it keeps scrolling
          scrub: true,
      }
  });
});


document.querySelectorAll('.img').forEach((img, index) => {
  gsap.to(img.querySelector("video"), {
      yPercent: 190,
      ease: "none",
      scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "+=10000", // extend the end point to ensure it keeps scrolling
          scrub: true,
      }
  });
});





    document.querySelectorAll('.container__heading').forEach(container => {
        const tl = gsap.timeline();

        tl.from(".loader span", {
            duration: 1.5,
            stagger: .03,
            ease: "expo.Out"
        })
        .to(".loader span", {
            duration: .6,
            stagger: .06,
            y: -140,
            ease: "power3.inOut"
        })
        .to(".introanim", {
            duration: 3,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power4.out"
        })
        .to(".introanim img", {
            duration: 3,
            scale: "1",
            y: '0%',
            ease: "expo.out"
        }, 2.2)
        .to(".test", {
            duration: 3,
            scale: "1",
            y: '0%',
            ease: "expo.out"
        })
        .to(".text", {
            duration: 2,
            duration: 1,
            opacity: 1,
            ease: "expo.out"
        })
        .to(container.querySelectorAll('.heading__line span'), {
            y: "0",
            filter: "blur(0px)",
            stagger: 0.05,
            duration: 2,
            ease: "expo.out"
        }, 5.1)
        .to(".they", {
            duration: 2,
            opacity: 1,
            ease: "expo.out"
        }, 5.3);
    });
}


  function updateClock() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const timeString = `${hours}<span class="blinker">:</span>${minutes} GMT.`;

    document.getElementById('gmtClock').innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock(); 


document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuContent = document.getElementById('menuContent');
    const menuItems = document.querySelectorAll('.item');

    function closeMenu() {
      menuOverlay.classList.remove('show');
      menuContent.classList.remove('show');
    }

    function openMenu() {
      menuOverlay.classList.add('show');
      menuContent.classList.add('show');
    }

    menuButton.addEventListener('click', function() {
      if (menuOverlay.classList.contains('show')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menuOverlay.addEventListener('click', function(event) {
      if (event.target === menuOverlay) {
        closeMenu();
      }
    });

    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        closeMenu();
      });
    });

    // Close menu on scroll
    window.addEventListener('scroll', function() {
      if (menuOverlay.classList.contains('show')) {
        closeMenu();
      }
    });
  });

  const items = document.querySelectorAll('.item');
  const images = document.querySelectorAll('.job img');
  const defaultImage = document.querySelector('.job .first');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      images.forEach(img => img.style.opacity = '0');
      const imgToShow = document.querySelector(`.job .${item.classList[1]}`);
      imgToShow.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
      images.forEach(img => img.style.opacity = '0');
      defaultImage.style.opacity = '1';
    });
    })


    const firstItem = document.querySelector('.items .first');
    const itemsContainer = document.querySelector('.items');
  
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        items.forEach(el => el.style.opacity = '0.3');
        item.style.opacity = '1';
      });
    });
  
    itemsContainer.addEventListener('mouseleave', () => {
      items.forEach(el => el.style.opacity = '0.3');
      firstItem.style.opacity = '1';
    });

    barba.init({

        transitions: [{
            name: 'default-transition',
            leave(data) {
              
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.5,
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5,
                });
            },
            afterEnter(data) {
                animateContent(); 
                lenis.update();
            }
        }]
    });


    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

let scrollX = 0
let scrollY = 0

barba.hooks.leave(() => {
  scrollX = barba.history.current.scroll.x;
  scrollY = barba.history.current.scroll.y;
});

// then later in the code...
window.scrollTo(scrollX, scrollY);
    
      

    
animateContent();