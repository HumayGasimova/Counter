/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Styles
  */

 import './tab.scss';
 
 /**
  *  Tab component definition and export
  */

 export class Tab extends Component {

 
    render(){
       return(
         <div className="tab"
            // onClick={this.props.onClick}
            >
          {this.props.title}
       </div>
       );
    }
 }
 
 /**
  * Prop types
  */
 
 export default Tab;