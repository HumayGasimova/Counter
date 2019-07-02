/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 
/**
 * Styles
 */

 import './header.scss';
 
 /**
  *  Button component definition and export
  */

 export class Header extends Component {
 
    render(){
       return(
         <div className="resultWindow">
          {this.props.value}
       </div>
       );
    }
 }
 
/**
 * Prop types
 */ 
 
 export default Header;