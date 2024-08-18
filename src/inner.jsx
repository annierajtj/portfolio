import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {TimelineMax, Expo} from 'gsap';

    

class Inner extends Component {
    
    componentDidMount() {
        this.hoverAnim();
        this.openMenu();
      }
 cursorActive = () => {
        let element = document.querySelector('.secondary');
        element.classList.add('cursor-active');
       
      }
    cursorInactive = () => {
        let element = document.querySelector('.secondary');
        element.classList.remove('cursor-active');
      }

    hoverAnim = () => {

        let menu_link = document.querySelector('.menu-link__title');
        console.log(menu_link);
        let tl = new TimelineMax({paused: true});
        tl.to(menu_link, .6, {x: '-50%', scaleX: 1, autoAlpha: 1, ease: Expo.easeOut});


        menu_link.addEventListener('mouseover', (e) => {
            tl.play();
        });
        
        menu_link.addEventListener('mouseout', (e) => {
            tl.reverse();
        });

    
    }

        
    openMenu = () => {

        this.setActive();
        
        let inner = document.querySelector('.inner__menu');
        let menu = document.querySelector('.menu');
        let layer_1 = document.querySelector('.layer_1');
        let layer_2 = document.querySelector('.layer_2');
        let layer_3 = document.querySelector('.layer_3');
        let layer_4 = document.querySelector('.layer_4');
        let layer_5 = document.querySelector('.layer_5');
 
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
              className:"+= menu active menu__close"
          });

      }

   setActive = () => {
        let MenuInner = document.querySelector('.inner__menu');
        let allItems = MenuInner.querySelectorAll('a');
        let path = window.location.pathname;
      
        for (let i = 0; i < allItems.length; i++) {

            if (path === '/'){
               allItems[0].childNodes[0].classList.add('active');
            } else if (path === '/work' ) {
                allItems[2].childNodes[0].classList.add('active');
            } else if (path ==='/about' ){
                allItems[3].childNodes[0].classList.add('active');
            } else {
                allItems[0].childNodes[0].classList.add('active');
            }
  
        }

    }

    closemenu = () => {

        let inner = document.querySelector('.inner__menu');
        let menu = document.querySelector('.menu');
        let layer_1 = document.querySelector('.layer_1');
        let layer_2 = document.querySelector('.layer_2');
        let layer_3 = document.querySelector('.layer_3');
        let layer_4 = document.querySelector('.layer_4');
        let layer_5 = document.querySelector('.layer_5');
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
        tl.to(menu, 2, 
            {  ease: Expo.easeIn,
              className:"+= menu ",
               });

      }
        render() { 
            return (  
                <div className="menu__inner">
          <div className="menu__background">
    
                <div className="layer_1"></div>
                <div className="layer_2"></div> 
                <div className="layer_3"></div>
                <div className="layer_4"></div>
                <div className="layer_5"></div>
                
        </div>    
        
            <div className="inner__menu">
                    <Link to="/" onClick={this.closemenu}  className="menu-link__link" onMouseEnter={this.cursorActive} onMouseLeave={this.cursorInactive}><div className="menu-link__title" >Home
                        <div className="menu-link__hover"></div></div> </Link>
                    <Link to="annie_raj_tj.pdf" onClick={this.closemenu}  className="menu-link__link" onMouseEnter={this.cursorActive} onMouseLeave={this.cursorInactive}><div className="menu-link__title" >Resume
                        <div className="menu-link__hover"></div></div> </Link>
                    <Link to="work" onClick={this.closemenu}  className="menu-link__link" onMouseEnter={this.cursorActive} onMouseLeave={this.cursorInactive}><div className="menu-link__title" >Work
                        <div className="menu-link__hover" ></div></div> </Link>
                    <Link to="about" onClick={this.closemenu} className="menu-link__link" onMouseEnter={this.cursorActive} onMouseLeave={this.cursorInactive}><div className="menu-link__title">About
                        <div className="menu-link__hover"></div></div> </Link>
                 
        </div></div> 
       

       );
    }
}
export default Inner;
