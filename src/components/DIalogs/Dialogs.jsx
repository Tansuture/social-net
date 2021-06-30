import s from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './MessageItem/MessageItem'
import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../state/dialogsReducer'

const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage
    //компоненты
    let dialogElem = state.dialogData.map(dialog => <DialogItem name={dialog.name} image={dialog.image} id={dialog.id}/>)
    let messageElem = state.messageData.map(mess => <Messages message={mess.message}/>)

    //новое сообщение
    let newMessageText = state.newMessageText


    let changeValue = (e)=>{
        let message = e.target.value
        props.store.dispatch(updateNewMessageTextActionCreator(message))
    }

    let addMessage = () => {
     props.store.dispatch(sendMessageActionCreator())
    }

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElem}
            </div>
            <div className={s.messages}>
                {messageElem}
            </div>
            <textarea value={newMessageText} onChange = {changeValue}></textarea>
            <button onClick={addMessage} className={s.button}>ADD POST</button>
        </div>

    )
}
export default Dialogs