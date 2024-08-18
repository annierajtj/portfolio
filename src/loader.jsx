import React from 'react';
import {onloader} from './actions';
import { useDispatch} from "react-redux";


const Loader = () => { 

    const dispatch = useDispatch();

    window.addEventListener('load', () => {
            let element = document.querySelector('.loader-page');
             element.style.opacity="0";
             element.style.display="none";
             dispatch(onloader());
          });
    

    
        return (  
            <div  className="loader-page" >
             <span className="loader__title">LOADING</span>
               <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r="160" stroke="#222831"/>
                <circle cx="170" cy="170" r="135" stroke="#b28949"/>
                <circle cx="170" cy="170" r="110" stroke="#222831"/>
                <circle cx="170" cy="170" r="85" stroke="#b28949"/>
            </svg>
	
        </div>
        );
    }

 
export default Loader;