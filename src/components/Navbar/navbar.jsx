import { NavLink } from 'react-router-dom'
import s  from './Navbar.module.css'

const Navbar=()=>{
    return(
        <nav className = {s.nav}>
      <ul className ={s.ul}>
        <li ><NavLink  className = {s.link} activeClassName = {s.active} to ="/profile">Profile</NavLink></li>
        <li>< NavLink className = {s.link} activeClassName = {s.active} to ="/messages">Messages</ NavLink></li>
        <li><NavLink  className = {s.link}activeClassName = {s.active}to ="/news">News</NavLink></li>
        <li><NavLink  className = {s.link}activeClassName = {s.active}to ="/music">Music</NavLink></li>
        <li><NavLink  className = {s.link}activeClassName = {s.active}to ="/settings">Settings</NavLink></li>
        <li><NavLink  className = {s.link}activeClassName = {s.active}to ="/users">Users</NavLink></li>
        <li><NavLink  className = {s.link}activeClassName = {s.active}to ="/login">Login</NavLink></li>
      </ul>
    </nav>
    )
}
export default Navbar