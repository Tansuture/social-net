import {connect} from 'react-redux'

import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../state/dialogsReducer'

import Dialogs from './Dialogs'


let mapDispatchToProps = (dispatch) => {
    return {
        addMessage:() => {
            dispatch(sendMessageActionCreator())
        },
        changeValue:(message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        }
    }
}



let mapStateToProps=(state)=>{
    
    return{
        dialogsPage:state.dialogsPage,
        isAuth:state.authMe.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


