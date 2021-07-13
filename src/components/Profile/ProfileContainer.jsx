import axios from 'axios';
import React,{Component} from 'react'
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../state/profileReducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {


    componentDidMount(){
      
       
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then(response=>{
            
            this.props.setUserProfile(response.data)
         
        })
    }
  
    render() { 
        return ( 
            <Profile {...this.props}/>
         );
    }
}

const mapStateToProps = (state)=>({
    profile:state.profilePage.profile
})
 
let WithRouterHOC=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile})(WithRouterHOC)