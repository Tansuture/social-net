
import {Component} from 'react'
import Header from './Header'
import {authThunkCreator} from '../../state/authReducer'
import { connect } from 'react-redux';


class HeaderContainer extends Component {
    componentDidMount(){
        this.props.authMe()
      
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

export default connect(mapStateToProps,{authMe:authThunkCreator})(HeaderContainer)