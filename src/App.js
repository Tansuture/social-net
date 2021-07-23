
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/DIalogs/DialogsContainer';
import HeaderContainer  from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/navbar';
import News from './components/News/News';

import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Setting';
import UsersContainer from './components/User/UsersContainer';




const App=()=>{

return (
  <BrowserRouter>
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
  </BrowserRouter>
)
}



export default App;
