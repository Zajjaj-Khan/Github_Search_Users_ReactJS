import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from '../types'

const GithubState = props => {
    const initailState = {
        users:[],
        repos: [],
        user:{},
        loading : false
    }

    const [state,dispatch] = useReducer(GithubReducer,initailState)

//Search Users
const searchUsers = async text =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRETS}`);
    
   dispatch({
    type:SEARCH_USERS,
    payload:res.data.items,
   })
  }

//Get USer
const getUser=async(username)=>{
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRETS}`);
    dispatch({
        type:GET_USER,
        payload:res.data
    })
  }
//Get Repos
const getRepo=async(username)=>{
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:ascclient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRETS}`);
    
    dispatch({
        type: GET_REPOS,
        payload:res.data,
    })
  }

//Clear Users
const clearUsers = ()=> dispatch({ type:CLEAR_USERS})
//Set laoding
const setLoading = () => dispatch({type:SET_LOADING})

    return <GithubContext.Provider
    value={{
        users: state.users ,
        repos: state.repos,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepo}}>
            
            {props.children}
   </GithubContext.Provider>


}
export default GithubState;