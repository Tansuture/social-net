import { useState } from "react"
import { Collapse } from '@material-ui/core'
import { useEffect } from "react"



const ProfileStatus=(props)=>{

    const [editMode,setEditMode]=useState(false)
    const [valueStatus,setStatus]=useState(props.status) //initial state

    
     const udpateStatus=(e)=>{
         setStatus(e.target.value) //value from input
         props.updateUserStatus(valueStatus) //set input-value to the thunkcreator
     }
   
   

    
    return(
        <>
        <div>
        {editMode?(<Collapse onDoubleClick={()=>setEditMode(false)}in={editMode}><input onChange={udpateStatus} value={valueStatus}></input></Collapse>):(<span  onDoubleClick={()=>setEditMode(true)}>{props.status}</span>)}
        </div>
        </>
    )
}

export default ProfileStatus