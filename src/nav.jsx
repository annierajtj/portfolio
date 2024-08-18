import React, { Fragment} from 'react';
import Inner from './inner';
import {menuopen} from './actions';
import { useSelector,useDispatch} from "react-redux";

const Nav = () => { 

    const OpenMenu = useSelector(state => state.reducer.menuOpen);
    const dispatch = useDispatch();
 
    const IsOpenmenu = () => {
        dispatch(menuopen());
    }

    const cursorActive = () => {
        let element = document.querySelector('.secondary');
        element.classList.add('cursor-active');
       
      }
      const cursorInactive = () => {
        let element = document.querySelector('.secondary');
        element.classList.remove('cursor-active');
      }

     
     return (  
            <Fragment>
            <div className="home-lines">      
            <div className="home-lines--left active">
                <div className="home-lines--left__gold" ></div>
            </div>
             <div className="home-lines--right active" >
                <div className="home-lines--right__gold"></div>
            </div> 
            <div className="home-lines--bottom">
                <div className="home-lines--bottom__gold"></div>
            </div>
        </div>

            <div className="menu" onClick={IsOpenmenu} onMouseEnter={cursorActive} onMouseLeave={cursorInactive}>  
                        <div className="menu-line menu-line--big" ></div> 
                        <div className="menu-line menu-line--little"></div> 
                        <div className="menu-line menu-line--big" ></div>
            </div>

            {OpenMenu && <Inner />}
          
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none" >
            <symbol id="facebook" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></symbol>
            <symbol id="linkedin" viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></symbol>
            <symbol id="gmail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></symbol>
            <symbol id="instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></symbol>
            <symbol id="github" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></symbol>
        </svg>
        </Fragment>
        );
    }

export default Nav;
