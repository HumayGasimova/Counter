/**
 * Libraries
 */

import React,{
   Component
} from 'react';

/**
 * Components
 */

import Header from './Header/header';
import Button from './Button/button';

/**
 * Styles
 */

import './app.scss';

/**
 *  Post component definition and export
 */
export class App extends Component {

   /**
    * Constructor
    */

  
   /**
    * Methods
    */


   /**
    * Markup
    */

   render(){
      return(
       <div>
           <Header/>
           <div className="buttonOrder">
                <Button/>
                <Button/>
                <Button/>
                <Button/>
           </div>
        </div>
      );
   }
}

/**
 * Prop types
 */


export default App;