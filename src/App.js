import './App.css';
import React, { Component, Fragment } from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import axios from 'axios';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './component/pages/About';
import User from './component/users/User';
class  App extends Component {
  state = {
    users:[],
    user:{},
    loading:false,
    alert:null,
    repos:[]
  }
  // async  componentDidMount(){
  //   this.setState({loading:true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRETS}`);
    
  //   this.setState({users:res.data,loading:false})
  // }

  //Search github Users
  searchUsers = async text =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRETS}`);
    
    this.setState({users:res.data.items,loading:false})
  }
  //Clear btn
  clearUsers = ()=> {
    this.setState({users:[],loading:false})
   
  }
  //Alert
  setAlert =(msg,type) =>{
    this.setState({alert:{msg,type}})

    setTimeout(() => {
      this.setState({alert:null})
    }, 5000);
  }
  //Get A single User
  getUser=async(username)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRETS}`);
    
    this.setState({user:res.data,loading:false})
  }
  //getUserRepos
  getRepo=async(username)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:ascclient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRETS}`);
    
    this.setState({repos:res.data,loading:false})
  }
  render(){
    const {users,loading,user,repos}=this.state;
  return (
    <Router>
    <div>
      <Navbar/>
     
      <div className='container'>
        <Alert alert={this.state.alert}/>
        <Routes>
          <Route 
          exact
          path='/'
          element={
            <Fragment>
            < Search  searchUsers={this.searchUsers}
            clearUsers={this.clearUsers} 
            showClear={this.state.users.length>0}
            setAlert={this.setAlert}
           />
           <Users users={users} loading={loading} />
           </Fragment>
          }
          />
          <Route
            exact
            path='/About'
            element={<About/>}
          />
          <Route
          exact
          path='/user/:login'
          element={<User getUser={this.getUser} user={user} 
          loading={loading}
          getRepo={this.getRepo}
          repos={repos}/>}
          
          
          />
     
      </Routes>
      </div>
     
    </div>
    </Router>
  );
}
}
export default App;
