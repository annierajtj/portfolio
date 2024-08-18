let root = document.querySelector('body');
let scrollIcon = document.querySelector('.home-content__scroll');
let menu = document.querySelector('.menu');
let social = document.querySelector('.social-icon__content');
let inner = document.querySelector('.inner__menu');
let layer_1 = document.querySelector('.layer_1');
let layer_2 = document.querySelector('.layer_2');
let layer_3 = document.querySelector('.layer_3');
let layer_4 = document.querySelector('.layer_4');
let layer_5 = document.querySelector('.layer_5');
let night = document.querySelector('.night');
let cloud = document.querySelector('.cloud-content');
let menu_link = document.querySelector('.menu-link__title');
let leftLineGold = document.querySelector('.home-lines--left__gold');
let rightLineGold = document.querySelector('.home-lines--right__gold');
let leftLine = document.querySelector('.home-lines--left');
let rightLine = document.querySelector('.home-lines--right');
let bottomLine = document.querySelector('.home-lines--bottom');
let homeContent = document.querySelector('.home-content');
let nameTitle = homeContent.querySelector('h1');
let developerTitle = homeContent.querySelector('h2');
rotated = false;
reverseRotation = false;
isAnimating = false;
detailOpen =  false;
scrollTouch =  false;
xDown = null;


//Create cursor
let cursor =root.appendChild(document.createElement('div'));
cursor.classList.add('cursor');
let clickhover = cursor.appendChild(document.createElement('div'));
clickhover.classList.add('cursor-click');
let child = root.appendChild(document.createElement('div'));
child.classList.add('secondary');



document.addEventListener('mousemove', (e) => {
  mouseMove(cursor,child, e);
});

 document.addEventListener('click',  () => {
  var tl =new TimelineMax();
  tl.fromTo(clickhover, 0.75, {
     width: 0,
     height: 0,
     opacity: 1
   }, {
     width: '38px',
     height: '38px',
     opacity: 0,
     ease: Power2.easeOut
   })
 });

scrollIcon.addEventListener('mouseenter', this.cursorActive, false);
scrollIcon.addEventListener("mouseleave", this.cursorInactive, false);
menu.addEventListener("mouseenter", this.cursorActive, false);
menu.addEventListener("mouseleave",this.cursorInactive, false);
menu.addEventListener("click", this.openMenu, false);

//document.querySelector('.menu__close').addEventListener("click", this.closemenu, false);

scrollIcon.addEventListener("click", this.rotateAll, false);
social.querySelectorAll('li').forEach(items => {
  items.addEventListener("mouseenter", this.cursorActive, false);
  items.addEventListener("mouseleave",this.cursorInactive, false);
});



function mouseMove(element,child, e) {
   
  var tl =new TimelineMax();
  
   tl.to(element, 0, {
    left: e.pageX,
    top: e.pageY
  });
  tl.to(child, 1.3, {
      ease: Elastic.easeOut.config(0.35, 0.3), // eslint-disable-line no-undef
      left: e.pageX,
      top: e.pageY
    })

}

function openMenu() {
 
  setActive();
  var tl =new TimelineMax();
  let easeAnim = Expo.easeOut;
 
  tl.to(layer_1, .8, {
      x: 0,
      ease: easeAnim
  });
  tl.to(layer_3, .8, {
      x: 0,
      ease: easeAnim,
      delay: -.8
  });
  tl.to(layer_2, .8, {
      x: 0,
      ease:easeAnim,
      delay: -.8
  });
  tl.to(layer_5, .8, {
    x: 0,
    ease: easeAnim,
    delay: -.8
  });
  tl.to(layer_4, .8, {
      x: 0,
      ease:easeAnim,
      delay: -.8
  });
  tl.to(inner, .8, {
      opacity: 1,
      ease: easeAnim,
      delay: -.4,
  });
  tl.to(menu, 2, 
    { ease: easeAnim,
      className:"+=active menu__close"
  });
}

/*menu_link.addEventListener('mouseover', (e) => {
  hoverAnim.play();
});

menu_link.addEventListener('mouseout', (e) => {
hoverAnim.reverse();
});

function hoverAnim() {
  let tl = new TimelineMax({paused: true});
  tl.to(menu_link, .6, {x: '-50%', scaleX: 1, autoAlpha: 1, ease: Expo.easeOut});
}*/

function setActive() {
  let MenuInner = document.querySelector('.inner__menu');
  let allItems = MenuInner.querySelectorAll('a');

  for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].classList.contains('active')) {
          allItems[i].classList.remove('active');
      }
  }
}

function closemenu() {
  let tl = new TimelineMax();
  
  tl.to(inner, .8, {
      opacity: 0,
      ease: Expo.easeOut
  });
  tl.to(layer_1, .6, {
      x: 100 + '%',
      ease: Expo.easeIn,
      delay: -.6
  });
  tl.to(layer_3, .6, {
      x: 100 + '%',
      ease: Expo.easeIn,
      delay: -.6
  });
  tl.to(layer_2, .6, {
      x: -100 + '%',
      ease: Expo.easeIn,
      delay: -.6,
      //onComplete: this.dispatchClose
  });
  tl.to(layer_5, .6, {
    x: 100 + '%',
    ease: Expo.easeIn,
    delay: -.6
  });
  tl.to(layer_4, .6, {
      x: -100 + '%',
      ease: Expo.easeIn,
      delay: -.6
  });
}

function cursorActive() {
  let element = document.querySelector('.secondary');
  element.classList.add('cursor-active');
}

function cursorInactive() {
  let element = document.querySelector('.secondary');
  element.classList.remove('cursor-active');
}
function setContentHeight() {
  let windowHeight =  window.innerHeight;

  document.querySelector('.home-content').style.height = windowHeight + 'px';
  //document.querySelector('.projects-page').style.height = (windowHeight + 195) + 'px';
}

function introAnimation() {
  var tl =new TimelineMax();
  let easeAnim = Power2.easeInOut;

  tl.to(nameTitle, .5, {
      opacity: 1,
      ease: easeAnim
  });
  tl.to(developerTitle, .5, {
      opacity: 1,
      y: 0,
      ease: easeAnim,
      delay: -.1
  });
  tl.to(leftLine, .3, {
      ease: easeAnim,
      className:"+=active",
  });
  tl.to(rightLine, .3, {
      ease: easeAnim,
      className:"+=active",
      delay: -.3
  });
  tl.to(leftLineGold, .6, {
      top: 10 + '%',
      ease: easeAnim,
      delay: -.3
  });
  tl.to(rightLineGold, .6, {
      top: 0,
      ease: easeAnim,
      delay: -.6
  });
  tl.to(menu, .6, {
      opacity: 1,
      y: 0,
      ease: easeAnim,
      delay: -.3
  });
  tl.to(scrollIcon, .3, {
      opacity: 1,
      ease: easeAnim,
      delay: -.1,
      onComplete: checkScrollDirection
  });
}

 function checkScrollDirection() {
  //TODO: set just one listener for wheel
  this.checkTouch();

  window.addEventListener("wheel", this.rotateAll,false);
  if (isMobile === false) {
      window.addEventListener('wheel', this.checkDirection,false);
  }
}

function checkTouch() {
  document.addEventListener('touchstart', this.handleTouchStart, false);
  document.addEventListener('touchmove', this.handleTouchMove, false);

}

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;                                      
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  rotateAll();

  if (this.isMobile === false) {
      this.swipe = true;

      if ( ! this.xDown || ! this.yDown ) {
          return;
      }

      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;

      let xDiff = this.xDown - xUp;
      let yDiff = this.yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      } else {
          if ( yDiff > 0 ) {
              if (this.rotated = true) {
                  this.swipeDirection = 'down';
                  this.checkDirection();
              }

          } else {
              if (this.rotated = true) {
                  this.swipeDirection = 'up';
                  this.checkDirection();
              }

          }
      }
  }

  this.xDown = null;
}

function rotateAll() {
  if (rotated === false) {
      rotated = true;
      if (isAnimating === false) {
          isAnimating = true;
          doRotation();
      }
  }
}

function doRotation() {
  let tl = new TimelineMax();
  let easeAnim = Power2.easeInOut;

  let scrollAmountRightLine = 0;
  let targetHeightRightLine = 50;
  let windowHeight = window.innerHeight;
  let totalNavHeight = (targetHeightRightLine * 7) / 2;

  scrollAmountRightLine = (windowHeight / 2) - totalNavHeight;
  window.history.pushState('about', 'About', '/about');
  

  tl.to(scrollIcon, .3, {
      opacity: 0,
      ease: easeAnim
  });
 tl.to(homeContent, 2, {
      rotation: 180,
      ease: Expo.easeOut,
      delay: -.3,
      onComplete: setAnimatingOff
  }, "letsRotate");

  tl.to(leftLineGold, .8, {
      top: 5 + 'vw',
      height: 40 + '%',
      ease: easeAnim,
      delay: .3
  }, "letsRotate");

  tl.to(menu, .8, {
      top: 65,
      ease: easeAnim,
      delay: .3
  }, "letsRotate");

  tl.to(rightLineGold, .8, {
      top: scrollAmountRightLine,
      height: targetHeightRightLine,
      ease: easeAnim,
      delay: .3
  }, "letsRotate");

}

function  setAnimatingOff() {
  isAnimating = false;
}

function rotateBack() {
  rotated = false;

  let tl = new TimelineMax();
  var easeAnim = Power2.easeInOut;

  window.history.pushState('home', 'Home', '/');

  //this.initSmoothBack();

  tl.to(rightLineGold, .5, {
      top: 0,
      height: 200,
      ease: easeAnim
  }, "letsRotate");

  tl.to(menu, .5, {
      top: 130,
      ease: easeAnim
  }, "letsRotate");

  tl.to(leftLineGold, .5, {
      top: 10 + '%',
      height: 60,
      ease: easeAnim
  }, "letsRotate");

  tl.to(homeContent, 2, {
      rotation: 0,
      ease: Expo.easeOut,
      onComplete: resetRotationBoolean
  }, "letsRotate");

  tl.to(scrollIcon, .3, {
      opacity: 1,
      ease: easeAnim
  }, "letsRotate");
}

function resetRotationBoolean() {
  rotated = false;
  isAnimating = false;
}

console.log('%c Hi There 👋🏼', 'background: #222831; font-size: 1.5em; font-weight: 500; color: #b28949; padding: 5px 10px; border-radius: 5px; text-align: center;');
