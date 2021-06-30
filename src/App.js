
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/DIalogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Setting';


const App=(props)=>{

return (
  <BrowserRouter>
  <div className = "app-wrapper">
   <Header/>
   <Navbar/>
   <div className = "app-wrapper-container">
  <Route path = "/messages" render = {()=><Dialogs store={props.store}/>} />
  <Route  path ="/profile"  render = {()=><Profile    dispatch={props.dispatch} profilePage={props.state.profilePage} />} /> 
  <Route  path ="/news"  render = {()=><Music/>}/>
  <Route  path ="/music"  render = {()=><News/>}/> 
  <Route path ="/settings"  render = {()=><Settings/>}/>
   </div>
  
  </div>
  </BrowserRouter>
)
}



export default App;
