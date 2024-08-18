import React, { Component} from 'react';
import {TimelineMax, Expo, Power2} from 'gsap';
import Parallax from 'parallax-js'

class Home extends Component {
    state={
        rotated :false,
        reverseRotation : false,
        isAnimating : false,
       
    };
    componentDidMount() {
        this.initParallax();
    }

    initParallax = () => {
        let scene = document.querySelector('.night');
        new Parallax(scene);
      }
    
    cursorActive = () => {
      let element = document.querySelector('.secondary');
      element.classList.add('cursor-active');
     
    }
    cursorInactive = () => {
      let element = document.querySelector('.secondary');
      element.classList.remove('cursor-active');
    }
    rotateAll = () =>  {
        if (this.state.rotated === false) {
                this.setState({rotated:true});
            if (this.state.isAnimating === false) {
                this.setState({isAnimating:true});
                this.doRotation();
            }
        }
    }
    doRotation = () =>  {

        let scrollIcon = document.querySelector('.home-content__scroll');
        let menu = document.querySelector('.menu');
        let stars = document.querySelector('.shooting_star');
        let leftLineGold = document.querySelector('.home-lines--left__gold');
        let rightLineGold = document.querySelector('.home-lines--right__gold');
        let homeContent = document.querySelector('.home-content');
        let nameTitle = homeContent.querySelector('h1');
        let developerTitle = homeContent.querySelector('h2');

        let tl = new TimelineMax();
        let easeAnim = Power2.easeInOut;
      
        let scrollAmountRightLine = 0;
        let targetHeightRightLine = 50;
        let windowHeight = window.innerHeight;
        let totalNavHeight = (targetHeightRightLine * 7) / 2;
      
        scrollAmountRightLine = (windowHeight / 2) - totalNavHeight;
        window.location.pathname = '/about';
      
        tl.to(scrollIcon, .3, {
            opacity: 0,
            ease: easeAnim
        });
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
       tl.to(homeContent, 2, {
            rotation: 180,
            ease: Expo.easeOut,
            delay: -.3,
            onComplete: this.setAnimatingOff
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
        tl.to(stars, .3, {
            opacity: 1,
            ease: easeAnim,
            delay: -.3
        });
        tl.to(rightLineGold, .8, {
            top: scrollAmountRightLine,
            height: targetHeightRightLine,
            ease: easeAnim,
            delay: .3
        }, "letsRotate");
      
    }
    setAnimatingOff = () =>  {
        this.setState({isAnimating:false});
       
      }
     
    render() { 
        return (
           <div className="home-page" id="home" >
        <div className="home-container">
        <div className="home-content">
            <img src="img/icon-mouse.svg" alt="Scroll icon" className="home-content__scroll" onClick={this.rotateAll} onMouseEnter={this.cursorActive} onMouseLeave={this.cursorInactive} />
            <div className="home-content__content">
                <h1 data-text="Annie Raj T J" className="glitch"> Annie Raj T J</h1>
                <div className="border"><span></span><span></span></div>
                <h2>Software Engineer</h2>
            </div> 
        </div> 
            
        <div className="cloud-content">
           <div className="cloud cloud__one">
               <img src="img/cloud1.svg" alt="Cloud Layer" />
           </div>
          <div className="cloud cloud__two" >
            <img src="img/cloud2.svg" alt="Cloud Layer" />
           </div>
           <div className="cloud cloud__three" >
            <img src="img/cloud3.svg" alt="Cloud Layer" />
           </div>
           <div className="cloud cloud__four" >
            <img src="img/cloudbg.svg" alt="Cloud Layer" />
           </div>
        </div>

       <div className="moon">
        <div className="night" >
        <div className="layer"  data-depth="0.40"><div className="shooting_star star_one" ></div></div>
        <div className="layer"  data-depth="0.40"><div className="shooting_star star_two" ></div></div>
        <div className="layer"  data-depth="0.30"><div className="shooting_star star_three"></div></div>
        <div className="layer"  data-depth="0.40"><div className="shooting_star star_four" ></div></div>
        <div className="layer"  data-depth="0.30"> <div className="shooting_star star_five" ></div></div>
        <div className="layer"  data-depth="0.30"> <div className="shooting_star star_six" ></div></div>
        </div>
        </div>
    </div>
    </div>    
            );
    }
}
 
export default Home;