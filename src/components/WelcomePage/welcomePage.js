/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 import {
     connect
  } from 'react-redux';
 
  import {
     bindActionCreators
  } from 'redux';
 
  import {
     Route
  } from 'react-router-dom';

  import {
   NavLink
} from 'react-router-dom';

import {
   useSpring,
   animated
} from 'react-spring';

 /**
  * Components
  */

 import './welcomePage.scss';
 /**
  * Styles
  */
 

  /**
  * Constants
  */
 
 
  /**
  * Actions
  */
 
 
 /**
  *  Post component definition and export
  */
 function WelcomePage (props) {
   const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
   const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
   const [props1, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
   return(
   <div className="welcomePage">
          <animated.div
               className="welcomeWord"
               onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
               onMouseLeave={() => set({ xys: [0, 0, 1] })}
               style={{ transform: props1.xys.interpolate(trans) }}
            >
               Welcome
            </animated.div>
            <div className="horizontalDiv"/>
         <NavLink className="linkHome" to={{ pathname: props.match.url + 'Home'}}>Press to visit home page</NavLink>
   </div>
   );
    
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;