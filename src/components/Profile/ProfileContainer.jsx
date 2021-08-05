
import React,{Component} from 'react'
import { connect } from 'react-redux';
import Profile from './Profile';
import {updateStatusThunkCreator, userProfileThunkCreator, userStatusThunkCreator} from '../../state/profileReducer'
import { withRouter } from 'react-router-dom';

import {Redirect} from "react-router-dom";



class ProfileContainer extends Component {
    
 

    componentDidMount(){
        let userId=this.props.match.params.userId
       
        if(this.props.isAuth){
            if(!userId){
                userId=this.props.userId
            }
        }
       
      
       this.props.setUserProfile(userId)
       this.props.setUserStatus(userId)
        
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
    isAuth:state.authMe.isAuth,
    status:state.profilePage.status,
    isAuth:state.authMe.isAuth,
    userId:state.authMe.userId
   
})

let WithRouterHOC=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile:userProfileThunkCreator,setUserStatus:userStatusThunkCreator,updateUserStatus:updateStatusThunkCreator})(WithRouterHOC)



