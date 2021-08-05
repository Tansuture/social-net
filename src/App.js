
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import './App.css';
import DialogsContainer from './components/DIalogs/DialogsContainer';
import HeaderContainer  from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/navbar';
import News from './components/News/News';
import Loader from 'react-loader-spinner'
import { withRouter } from 'react-router-dom';

import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Setting';
import UsersContainer from './components/User/UsersContainer';
import { initializeAppThunkCreator } from './state/appReducer';




const App=(props)=>{
  

  useEffect(()=>{
    props.initiliazeApp()
  
 

  },[])
if(!props.initialiazed){
  return <Loader
  type="Puff"
   color="#00BFFF"
   height={100}
   width={300}
   timeout={4000} />
}
return (
  <div className = "app-wrapper">
   <HeaderContainer/>
   <Navbar/>
   <div className = "app-wrapper-container">
  <Route path = "/messages" render = {()=><DialogsContainer />} />
  <Route  path ="/profile/:userId?"   render = {()=><ProfileContainer/>} /> 
  <Route  path ="/news"  render = {()=><Music/>}/>
  <Route  path ="/music"  render = {()=><News/>}/> 
  <Route path ="/settings"  render = {()=><Settings/>}/>
  <Route path ="/users" render ={()=><UsersContainer/>}/>
  <Route path ="/login" render ={()=><Login/>}/>

   </div>
  
  </div>
 
)
}


const mapStateToProps=(state)=>({
initialiazed:state.app.initialize
})
let WithRouterHOC=withRouter(App)
export default connect(mapStateToProps,{initiliazeApp:initializeAppThunkCreator})(WithRouterHOC)
