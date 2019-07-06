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
import WelcomePage from '../WelcomePage/welcomePage';

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
            title: "Welcome",
            clicked: false
         },
         {
            title: "Counter",
            clicked: false
         },
         {
            title: "Next",
            clicked: false
         },
         {
            title: "Next1",
            clicked: false
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
               <div className="activeTab">
                  <div className="verticalDiv"/>
                  <NavLink 
                     key={i}
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
         //  <Router>
               <div>
                  <div className="header">
                  
                     {this.renderTabs()}
                           {/* <div className="verticalDiv"/>
                           <a href="http://localhost:8084/">Welcome</a>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                        <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname: this.props.match.url + '/Counter'
                              }}
                              activeClassName="my-active"
                              // activeStyle={{
                              //    color: "orange",
                                 
                              // }}
                           >
                                 Counter
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname: this.props.match.url + '/Next'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname: this.props.match.url + '/Next1'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next1
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname: this.props.match.url + '/Next2'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next2
                           </NavLink>
                           <div className="verticalDiv"/>
                        </div>
                        <div className="activeTab">
                           <div className="verticalDiv"/>
                           <NavLink 
                              to={{
                                 pathname: this.props.match.url + '/Next3'
                              }}
                              activeClassName="active"
                              activeStyle={{
                                 color: "orange"
                              }}
                           >
                              Next3
                           </NavLink>
                           <div className="verticalDiv"/> */}
                       
                     </div>
                  <div>
                     <Switch>
                        <Route
                           exact 
                           path={this.props.match.url + "/Counter"}
                           component={App}/>
                        {/* <Route
                           exact 
                           path={this.props.match.url + "/Counter"}
                           component={()=>(<App/>)}/> */}
                        <Route
                           exact 
                           path={this.props.match.url + "/Next"}
                           render={()=>(<div>Hey</div>)}/>
                        <Route
                           exact 
                           path={this.props.match.url + "/Next1"}
                           render={()=>(<div>Next1</div>)}/>
                     </Switch>
                  </div>
            </div>
      //   </Router>
       );
    }
 }
 
 /**
  * Prop types
  */
  
 export default Home;