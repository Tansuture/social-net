import { useState } from 'react';
import { NavLink,Link } from 'react-router-dom'
import s from './Header.module.css'
import Logout from './LogoutDropDown';

const Header = (props) => {

 

    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"></img>
                <div className={s.auth_block}>
                    <Link onClick={props.logout}>
                    {props.isAuth ? props.login :
                    <NavLink to="/login">Login</NavLink>}
                    </Link>
              
                </div>
             
        </header>
    )
}
export default Header