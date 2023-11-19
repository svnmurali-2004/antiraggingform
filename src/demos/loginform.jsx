import logo from './logo.svg';
import './App.css';
import { useState, onChange } from 'react';

function App() {
  
 const [data,setData]=useState({Name:"",password:""})
 const {Name,password}=data
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault()
    console.log(data.Name,data.password)
    

  }

  return(
   <>
   
    <h1>login form</h1>
    <div className='form1'> 
    <center>
    <form onSubmit={submitHandler}>
      <label htmlFor='Name'>Name :</label>
      <input type='text' name='Name' value={Name} onChange={changeHandler}/>
      <br/>
      <label htmlFor='password'>Passsword :</label>
      <input type='password' name="password" value={password} onChange={changeHandler}/>
      <br/>
      <input type='submit' name="login"/>
    </form>
    <h3>{data.Name}&{data.password}</h3>
    </center>
    
   </div>
   </>);
   
}

export default App;