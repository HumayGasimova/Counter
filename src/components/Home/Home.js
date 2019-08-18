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
  import SignUp from '../Auth/SignUp/signUp';
  import Tab from '../Tab/tab';
  import Result from '../Result/result';
  import Logout from '../Auth/Logout/logout';

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
            title: "Authenticate"
         },
         {
            title: "Logout"
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
                        path={this.props.match.url + "/Authenticate"}
                        component={SignUp}/>
                     <Route
                        exact 
                        path={this.props.match.url + "/Logout"}
                        component={Logout}/>
                  </Switch>
               </div>
         </div>
       );
    }
 }
 
 /**
  * Prop types
  */
 export default connect(
   (state) => {
       return {
         isAuthenticated: state.auth.token !== null
       };
    },
   (dispatch) => {
      return {
         // onAuth: bindActionCreators(Actions.auth, dispatch)
      };
   }
)(Home);