import React, { Fragment,useContext,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../Context/github/githubContext';
const User=()=> {
    const githubContext = useContext(GithubContext)

    const {user,getUser,loading,getRepo,repos} = githubContext
    const params = useParams()
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;
   
    useEffect(() => {
      getUser(params.login);
      getRepo(params.login)
  
      
    },[]);
    if(loading)return<Spinner/>;
    return (
    <Fragment>
      <Link to='/' className='btn btn-ligth '> Back to User</Link>
      Hireable: {' '}
      {hireable?<i className="fas fa-check text-success"/>:<i className="fas fa-times-circle text-danger"/>}
      <div className='card grid-2'>
        <div className='all-center'>
        <img src={avatar_url} alt='' className='round-img'style={{width:'150px'}}/>
        <h1>{name||login}</h1>
        <h4>Location: {location? location:'Not Available'}</h4>
        </div>
        <div>
          {bio && <Fragment>
            <h1>Bio:</h1>
            <p>{bio}</p>
          </Fragment> }
          <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
          <div>
          {login && <p>Login:{login}</p>}
          {blog && <p>Website:{blog}</p> }
          </div>
        </div>
        
        </div> 
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers:{followers}</div>
          <div className='badge badge-dark'>Following:{following}</div>
          <div className='badge badge-light'>Public Repos:{public_repos}</div>
          <div className='badge badge-success'>Public Giests:{public_gists}</div>
        </div>
        <div>
            <Repos repos={repos}/>
        </div>
    </Fragment>
   
    
    )}
  export default User;