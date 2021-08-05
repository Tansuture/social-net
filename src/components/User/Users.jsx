
import Loader from 'react-loader-spinner'

import Pagination from './Pagination'
import User from './PersonalUser'


const Users = ({users,isBtnToggled,follow,unfollow,postsPerPage,totalCount,currentPage,changePage,isLoading}) =>{
   
    return(
        <>
        {isLoading ? (
             <Loader
             type="Puff"
             color="#00BFFF"
             height={100}
             width={300}
             timeout={4000} //3 secs
           />
        ):(
        <div>
    {users.map(u=><User key={u.id} user={u}isBtnToggled={isBtnToggled}follow={follow}unfollow={unfollow} /> )}
  
    <Pagination totalCount={totalCount} postsPerPage={postsPerPage} changePage={changePage} currentPage={currentPage}/>
</div>

)}
</> 
    ) 
 

}

export default Users