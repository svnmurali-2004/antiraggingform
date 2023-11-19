import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState({username:"",email:"",password:"",confirmpassword:""})
  const {username,email,password,confirmpassword}=data
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault()
    if (password!==confirmpassword){
      alert("passwords not match")
      console.log("passwords not match")
    }else if (password.length<5){
      alert("password must be greater than 5 digits")
      console.log("password must grreater than 5 digits")

    }else{console.log(data)}
  }
  return(
    <>
    <h1>signup form</h1>
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label>
            NAME
          </label>
          <br/>
          <input className='inbox' type='text' name='username' value={username} onChange={changeHandler}/>
          <br/>
          <label>
            EMAIL
          </label>
          <br/>
          <input className='inbox' type='email' name='email' value={email} onChange={changeHandler}/>
          <br/>
          <label>
          password
          </label>
          <br/>
          <input className='inbox' type='password' name='password' value={password} onChange={changeHandler}/>
          <br/>
          <label>
            confirm password
          </label>
          <br/>
          <input className='inbox' type='password' name='confirmpassword' value={confirmpassword} onChange={changeHandler}/>
          <br/>
          <input type='submit' name='submit'/>
        </form>
      </center>
    </div>
   </>);
   
}

export default App;