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
   Link
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
 function WelcomePage () {
   const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
   const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
   return(
   <div className="welcomePage">
          <animated.div
               className="welcomeWord"
               onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
               onMouseLeave={() => set({ xys: [0, 0, 1] })}
               style={{ transform: props.xys.interpolate(trans) }}
            >
               Welcome
            </animated.div>
            <div className="horizontalDiv"/>
         <Link className="linkHome" to="/Home">Press to visit home page</Link>
   </div>
   );
    
 }
 
 /**
  * Prop types
  */
  
 export default WelcomePage;