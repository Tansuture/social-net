import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../state/dialogsReducer'
import Dialogs from './Dialogs'
const DialogsContainer = (props)=>{

    let state = props.store.getState().dialogsPage
  
    let changeValue = (message)=>{
       
     props.store.dispatch(updateNewMessageTextActionCreator(message))
    }

    let addMessage = () => {
     props.store.dispatch(sendMessageActionCreator())
    }

   return (  <Dialogs addMessage={addMessage} dialogsPage={state} changeValue={changeValue}/>

   )
   
}

export default DialogsContainer