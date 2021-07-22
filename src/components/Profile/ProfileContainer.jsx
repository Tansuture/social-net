
import React,{Component} from 'react'
import { connect } from 'react-redux';
import Profile from './Profile';
import {userProfileThunkCreator} from '../../state/profileReducer'
import { withRouter } from 'react-router-dom';

import {Redirect} from "react-router-dom";



class ProfileContainer extends Component {
    
 

    componentDidMount(){
      
       this.props.setUserProfile(this.props.match.params.userId)
        
    }
  
    render() { 
        if (!this.props.isAuth) return <Redirect to='/login' />
      
        
        return ( 
           
            <Profile {...this.props} />
            
         );
    }
}


const mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    isAuth:state.authMe.isAuth
   
})

let WithRouterHOC=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile:userProfileThunkCreator})(WithRouterHOC)



