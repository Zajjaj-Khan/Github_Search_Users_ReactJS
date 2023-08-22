import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Search extends Component {
  static propTypes = {
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired
  }
    state ={
        text:''
    }
    onChange = (e) =>{
        this.setState({text: e.target.value})
    }
    onSubmit =(e)=>{
        e.preventDefault();
        if(this.state.text===''){
          this.props.setAlert("Please Enter Something","light")
        }else{
          this.props.searchUsers(this.state.text)
        }
       
       
    }
    clearUsers =() =>{
      this.props.clearUsers(this.state.text)
      this.setState({text:''})
    }

  render() {
      const {showClear}=this.props
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
            <input type="text" placeholder="Search..." value={this.state.text} onChange={this.onChange}/>
            <input type='submit' value='Search' className='btn btn-dark btn-block'/>
        </form>
        {showClear &&
         <button className='btn btn-light btn-block' onClick={this.clearUsers}>Clear</button>}
       
      </div>
    )
  }
}

export default Search