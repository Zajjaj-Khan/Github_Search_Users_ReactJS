import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const  Navbar =(props)=> {
    return (
      <nav className='navbar bg-primary'>
        <h1>
            <i className={props.github_icon}/> 
                {props.title}            
            </h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
                </li>
              <li>
                <Link to='/About'>About</Link>
              </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
  title:"Github Finder",
  github_icon:"fab fa-github"
}
  
Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  github_icon :PropTypes.string
}
export default Navbar