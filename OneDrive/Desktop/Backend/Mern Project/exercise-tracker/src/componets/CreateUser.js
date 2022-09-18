import axios from 'axios'
import React, { useState } from 'react'
function CreateUser() {
  const [name,setname]=useState({
    username:''
  })
  
  const handleChange=(e)=>{
    setname({[e.target.name]:e.target.value}) // jo input ka name ka hoga uski value save hogi
  }
  const handleClick=(e)=>{
    e.preventDefault()
    console.log(name);
    const newName={
      username:name.username
    }
      axios.post('http://localhost:3000/user/add',newName).then(res => console.log(res.data)).catch((err) => {
      console.log(err.message);   
    });
      // window.location = '/'
    }
  
  return (
<div>
        <h3>Create New User</h3>
        <form>
          <div className="form-group"> 
            <label>Username: </label>
            <input name="username" onChange={handleChange} value={name.username}className='form-control' type="text" placeholder="enter the username" ></input>
            </div>
          <div className="form-group">
            <input onClick={handleClick} type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
  )
}

export default CreateUser