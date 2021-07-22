import { useState } from "react"
import { Collapse } from '@material-ui/core'



const ProfileStatus=()=>{

    const [editMode,setEditMode]=useState(false)

    return(
        <>
        <div>
        {editMode?(<Collapse onDoubleClick={()=>setEditMode(false)}in={editMode}><input></input></Collapse>):(<span  onDoubleClick={()=>setEditMode(true)}>Hello</span>)}
        </div>
        </>
    )
}

export default ProfileStatus