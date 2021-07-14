import axios from 'axios';
import {Component} from 'react'
import Header from './Header'
import {setUserData} from '../../state/authReducer'
import { connect } from 'react-redux';
import {  usersAPI } from '../../api/api';

class HeaderContainer extends Component {
    componentDidMount(){
        usersAPI.auth().then(data=>{
        if(data.resultCode===0) {
        const {id,login,email}=data.data
          this.props.setUserData({id,login,email})
             }
        })

    }
    render() { 
        return ( 
             <>
             <Header {...this.props}/>
             </>
        );
    }
}
 
const mapStateToProps = (state)=>({
isAuth:state.authMe.isAuth,
login:state.authMe.login
})

export default connect(mapStateToProps,{setUserData})(HeaderContainer)