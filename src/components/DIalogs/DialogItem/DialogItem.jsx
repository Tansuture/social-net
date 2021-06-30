
import { NavLink } from 'react-router-dom'
import s from './../Dialog.module.css'

const DialogItem = (props)=>{
    return(
        <div className = {s.dialog}>
        <img className= {s.image} src={props.image}/>
        <NavLink  className={s.name}to = {"/dialogs/"+ props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem
