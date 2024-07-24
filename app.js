


const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1,
    infinite: false,
});

// Request animation frame loop for Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



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

function updateClock() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const timeString = `${hours}<span class="blinker">:</span>${minutes} GMT.`;

    document.getElementById('gmtClock').innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock(); 

gsap.registerPlugin(ScrollTrigger);

    
document.querySelectorAll('.img').forEach((img, index) => {

    gsap.to(img.querySelector("img"), {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    });
});

document.querySelectorAll('.container__heading').forEach(container => {
    const tl = gsap.timeline();

  tl.from(".loader span",{
    duration: 1.5,
    stagger:.03,

    ease: "expo.Out" 
  })
  tl.to(".loader span",{
    duration:.6,

    stagger:.06,
    y: -140,
    ease: "power3.inOut" 
  })
  
    tl.to(".introanim", {
      duration: 3,
      clipPath: "inset(0% 0% 0% 0%)",
    ease: "power4.out"
  })

  tl.to(".introanim img", {
      duration: 3,
      scale: "1",
      y: '0%', 
      ease: "expo.out"
  }, 2.2)










  .to(".test",{
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
  }, 5.3)


  });

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
    debug: true,
    transitions: [
    {
        name: 'to-pages',
        async leave(data){
            const done = this.async();
            document.removeEventListener("mousemove", moveCursor);
            pageTransitionToPage(data.next.namespace);
            await delay(1300);
            done();
        },
        async enter() {
            contentAnimationToPage();
            document.addEventListener('mousemove', moveCursor);
        },
        from: {
            namespace: 'home',
        },
        to: {
            namespace: [
                'about',
                'products',
                'contacts',
                'portfolio'
            ]
        },
    },
    {
        name: 'to-home',
        async leave(){
            const done = this.async();
            pageTransitionToHome();
            await delay(1000);
            done();
        },
        async enter(data) {
            contentAnimationToHome(data.current.namespace);
        },
        async after(){
            listItemsShow();
        },
        from: {
            namespace: [
                'about',
                'products',
                'contacts',
                'portfolio'
            ]
        },
        to: {
            namespcae: 'home'
        }
    },
    ]
});

function pageTransitionToPage(arg){

    gsap.to('.home-left-container div', {opacity: 0, duration: 0.3});
    gsap.to('li.list-item a', {y: 170, duration: .8, display: 'block', stagger: 0.2, delay: 0.3,  ease: "power2.out" });

    let images = document.querySelectorAll('.image-container');

    switch (arg) {
        case 'about':
            gsap.to('.image-container:nth-child(1)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out" } )
            //prevent cursor error
            images[1].style.display = "none";
            images[2].style.display = "none";
            images[3].style.display = "none";
            break;
        case 'products':
            gsap.to('.image-container:nth-child(2)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out" } )
            images[0].style.display = "none";
            images[2].style.display = "none";
            images[3].style.display = "none";
            break;
        case 'contacts':
            gsap.to('.image-container:nth-child(3)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out" } )
            images[0].style.display = "none";
            images[1].style.display = "none";
            images[3].style.display = "none";
            break;
        case 'portfolio':
            gsap.to('.image-container:nth-child(4)',{opacity: 1, left: 20, top: 20, bottom: 40, width: '40%', maxHeight: '100%', duration: 1, delay: 0.3, ease: "power1.out"  } )
            images[0].style.display = "none";
            images[1].style.display = "none";
            images[2].style.display = "none";
            break;
    }
    
}

function contentAnimationToPage(){
    gsap.from('div.row h1', {y: 170, duration: .8, display: 'block', stagger: 0.2,  ease: "power2.out" });
    gsap.from('div.nav a', {y: 170, duration: .8, display: 'block', delay: .8});
}

function pageTransitionToHome(){
    gsap.to('div.row h1', {y: 170, duration: .8, display: 'block', stagger: 0.2, delay: .3,  ease: "power2.out" });
    gsap.to('div.nav a', {y: 170, duration: 1, display: 'block',});
}

function contentAnimationToHome(arg){
    gsap.from('li.list-item a', {y: 170, duration: .8, display: 'block', stagger: 0.2,  ease: "power2.out" });

    document.querySelector('.image-container').classList.add('mouse');

    switch (arg) {
        case 'about':
            gsap.fromTo('.image-container:nth-child(1)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(1)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
        case 'products':
            gsap.fromTo('.image-container:nth-child(2)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(2)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
        case 'contacts':
            gsap.fromTo('.image-container:nth-child(3)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(3)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
        case 'portfolio':
            gsap.fromTo('.image-container:nth-child(4)',
            {opacity: 1, left: 20, top: 20, width: '40%', maxHeight: '100%', duration: 1 },
            {opacity: 0, width: 400 } 
            )
                
            gsap.from('.image-container:nth-child(4)',
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", duration: 1, display: "block" 
            })
            break;
    }
    gsap.from('.home-left-container div', {y: 1000, duration: .8, display: 'block', stagger: 0.2, delay: 0.5, ease: "power2.out"});
}
//function used in barba lifecycle to control the effects durations
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}