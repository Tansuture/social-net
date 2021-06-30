import s from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './MessageItem/MessageItem'
import React from 'react'

const Dialogs = (props) => {
    
    let state = props.dialogsPage
    //компоненты
    let dialogElem = state.dialogData.map(dialog => <DialogItem name={dialog.name} image={dialog.image} id={dialog.id}/>)
    let messageElem = state.messageData.map(mess => <Messages message={mess.message}/>)

    //новое сообщение
    let newMessageText = state.newMessageText


    let onChangeValue = (e)=>{
        let message = e.target.value
        props.changeValue(message)
    }

    let onAddMessage = () => {
     props.addMessage()
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElem}
            </div>
            <div className={s.messages}>
                {messageElem}
            </div>
            <textarea value={newMessageText} onChange = {onChangeValue}></textarea>
            <button onClick={onAddMessage} className={s.button}>ADD POST</button>
        </div>

    )
}

export default Dialogs