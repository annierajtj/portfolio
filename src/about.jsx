import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import {TimelineMax,Power2} from 'gsap';

class About extends Component {

    render() { 
        return (  
            <div  className="about-page" id="about" >
    <div className="about-container">
    <div className="about-block">
        <div className="about-block__content">
            <h1>This is Me ,</h1>
            <p>I am a Software Engineer, currenlty living in trivandrum. I am very passionate in creating website it makes me who iam and what iam.Developing creative website is fun. My hobbies are playing games and listening music.</p>
            <div className="social-icon">
                <ul className ="social-icon__content">
                    <li><ExternalLink href="https://www.facebook.com/annie.raj.5680" className="icon icon-facebook" target="_blank">
                        <svg aria-hidden="true" focusable="false" role="img"><use xlinkHref="#facebook" /></svg>
                    </ExternalLink></li>
                    <li><ExternalLink href="https://www.linkedin.com/in/annie-raj-t-j-861109131/" className="icon icon-linkedin" target="_blank">
                        <svg aria-hidden="true" focusable="false" role="img"><use xlinkHref="#linkedin" /></svg>
                    </ExternalLink></li>
                    <li><ExternalLink href="mailto:annierajtj@gmail.com" className="icon icon-gmail" target="_blank">
                        <svg aria-hidden="true" focusable="false" role="img"><use xlinkHref="#gmail" /></svg>
                    </ExternalLink></li>
                    <li><ExternalLink href="https://www.instagram.com/tjannieraj/" className="icon icon-instagram" target="_blank">
                        <svg aria-hidden="true" focusable="false" role="img"><use xlinkHref="#instagram" /></svg>
                    </ExternalLink></li>
                    <li><ExternalLink href="https://github.com/annierajtj" className="icon icon-github" target="_blank">
                        <svg aria-hidden="true" focusable="false" role="img"><use xlinkHref="#github" /></svg>
                    </ExternalLink></li>
                </ul>
            </div>
        </div>
    </div></div>

</div>
        );
    }
}
 
export default About;