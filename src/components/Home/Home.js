/**
 * Libraries
 */

import React,{
    Component,
    Suspense
 } from 'react';
 
 import {
     connect
  } from 'react-redux';
 
  import {
     bindActionCreators
  } from 'redux';
 
  import {
     BrowserRouter as Router,
     Route,
     NavLink,
     Switch
  } from 'react-router-dom';



 /**
  * Components
  */
 

 
 /**
  * Styles
  */
 
  import './Home.scss';

  /**
  * Constants
  */
  import App from '../App';
  import Tab from '../Tab/tab';
  import Result from '../Result/result';

  /**
  * Actions
  */
 
   /**
  * Const
  */

 /**
  * Home component definition and export
  */

 export class Home extends Component {

   state={
      tabs: [
         {
            title: "Welcome"
         },
         {
            title: "Counter"
         },
         {
            title: "Next"
         },
         {
            title: "Next1"
         }
      ]
   }
 
    /**
     * Constructor
     */
   
     /**
     * Methods
     */
    renderTabs = () => {
       return(
         this.state.tabs.map((tab,i)=>{
            return(
               <div className="activeTab"
                    key={i}>
                  <div className="verticalDiv"/>
                  <NavLink
                     to={tab.title === "Welcome" ? {pathname: '/Welcome'} : {pathname: this.props.match.url + '/' + tab.title}}
                     activeClassName="active-tab"
                     // activeStyle={{
                     //    color: "orange"
                     // }}
                  >
                     <Tab
                        title={tab.title}
                        clicked={true}
                     />
                  </NavLink>
                  <div className="verticalDiv"/>
               </div>
            )
         })
       )
    }
 
    /**
     * Markup
     */
 
    render(){
       return(
            <div>
               <div className="header">
                  {this.renderTabs()}
               </div>
               <div>
                  <Switch>
                     <Route
                        path={this.props.match.url + "/Counter"}
                        component={App}/>
                     {/* <Route
                        exact 
                        path={this.props.match.url + "/Counter"}
                        component={()=>(<App/>)}/> */}
                     <Route
                        exact 
                        path={this.props.match.url + "/Next"}
                        render={()=>(<div>Next</div>)}/>
                     <Route
                        exact 
                        path={this.props.match.url + "/Next1"}
                        render={()=>(<div>Next1</div>)}/>
                  </Switch>
               </div>
         </div>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default Home;