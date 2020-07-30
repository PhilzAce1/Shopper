require('./sass/main.scss');
import './sass/main.scss';
document.body.onload = () => {
  nav();
  landingEffect();
};
function nav() {
  let toggle = document.querySelector('#open');
  let toggleOff = document.querySelector('#close');
  const tl = gsap.timeline({ paused: true, reversed: true });

  toggle.addEventListener('click', () => {
    console.log('hello');
    if (tl.reversed()) {
      tl.play();
    }
    tl.to('#open', {
      display: 'none',
    })
      .to('#close', {
        display: 'inline-block',
      })
      .to('.nav_container', {
        display: 'inline-block',
      })
      .to('.box', { scale: 1, stagger: 0.2, transformOrigin: 'top' })
      .from('nav ul li', {
        x: 100,
        opacity: 0,
        stagger: 0.2,
      });
  });

  //close nav
  [...document.querySelectorAll('nav ul li')].forEach((x) =>
    x.addEventListener('click', () => {
      tl.reverse();
    })
  );
  toggleOff.addEventListener('click', () => {
    tl.reverse();
  });
}
function landingEffect() {
  const dv = gsap.timeline();
  console.log('landing page should be working na ');
  dv.to('.loader_container', {
    opacity: 0,
    duration: 1,
  })
    .to('.loader_container', {
      display: 'none',
    })
    .to('.welcome_conatainer div', {
      duration: 0.3,
      text: {
        value: 'SHOPPER',
        delimiter: '',
      },
      //   ease: 'power2',
      //   delay: -0.25,
    })
    .to('.welcome_conatainer', {
      opacity: 0,
      duration: 1,
      delay: 1,
    })
    .to('.welcome_conatainer', {
      display: 'none',
    })
    .from('.img_section', {
      scaleX: 0,
      duration: 0.4,
      transformOrigin: 'left',
    })
    .from('.text_section', {
      opacity: 0,
      duration: 0.4,
      scaleX: 0,
      transformOrigin: 'right',
      background: 'purple',
      zIndex: '-1',
    })
    .from('#img1', {
      duration: 0.4,
      opacity: '0',
      y: -100,
    })
    .from('#img2', {
      opacity: '0',
      duration: 0.4,
      x: 100,
    })
    .from('#img3', {
      duration: 0.4,
      opacity: '0',
      x: -100,
    })
    .from('.text_section .home', {
      opacity: '0',
      duration: 0.4,
      x: -100,
    });
}
