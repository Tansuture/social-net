
import {Component} from 'react'
import Header from './Header'
import {logoutThunkCreator} from '../../state/authReducer'
import { connect } from 'react-redux';


class HeaderContainer extends Component {
     
 
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

export default connect(mapStateToProps,{logout:logoutThunkCreator})(HeaderContainer)