import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner'
import GithubContext from '../../Context/github/githubContext';
const  Users =()=> {
  const githubContext = useContext(GithubContext);
  const {loading,users} = githubContext
  if(loading){
    return <Spinner/>
  }else{
    return (
      <div style={userStyle}>
        {users.map(user => (
        <div key={user.id}><UserItem  users={user}/></div>
      ))}</div>
        
    )
  }
   
  }
const userStyle ={
  display:'grid',
  gridTemplateColumns : "repeat(3, 1fr) ",
  gap :"1rem"
}

export default Users