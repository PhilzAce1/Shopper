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
    duration: 2,
    delay: 2,
  })
    .to('.loader_container', {
      display: 'none',
    })
    .to('.welcome_conatainer div', {
      duration: 1,
      text: {
        value: 'SHOPPER',
        delimiter: '',
      },
      ease: 'power2',
      delay: -0.25,
    })
    .to('.welcome_conatainer', {
      opacity: 0,
      duration: 2,
      delay: 2,
    })
    .to('.welcome_conatainer', {
      display: 'none',
    })
    .from('.img_section', {
      scaleX: 0,
      transformOrigin: 'left',
    })
    .from('.text_section', {
      opacity: 0,
      scaleX: 0,
      transformOrigin: 'right',
      zIndex: '-1',
    })
    .from('#img1', {
      opacity: '0',
      y: -100,
    })
    .from('#img2', {
      opacity: '0',
      x: 100,
    })
    .from('#img3', {
      opacity: '0',
      x: -100,
    })
    .from('.text_section .home', {
      opacity: '0',
      x: -100,
    });
}
