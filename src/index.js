import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TimelineMax, Elastic, Power2} from 'gsap';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(()=>console.log(Store.getState()));

const mouseMove = (element,child, e) => {
   
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

const run = () => {

 //Create cursor
let root = document.querySelector('body');
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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

}

run();
console.log('%c Hi There 👋🏼', 'background: #222831; font-size: 1.5em; font-weight: 500; color: #b28949; padding: 5px 10px; border-radius: 5px; text-align: center;');
