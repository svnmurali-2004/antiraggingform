/*import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios"
import about from "./about"
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  const [expr,setExpr]=useState("")
  const [result,setResult]=useState(0)
  const Result=()=>{
    
  }
  const changeHandler=e=>{
    setExpr(e.target.value)
  }
  const [data,setData]=useState({username:"",password:""})
  const {username,password}=data
  const changeHandler1=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault()
    axios.post('https://banking-2c9ff-default-rtdb.firebaseio.com/register.json',data).then(()=>{
      alert("submitted successfully")}
    )
  }
  return(
    <>
    
    <center>
    <h1>signup form</h1>
    <div>
      <input type='text' name='expr' value={expr} onChange={changeHandler}/>
      <button onClick={()=>{setResult(eval(expr))}}>Result</button>
      <h3>Result is :{result}</h3>
    </div>
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='enter the name' name='username' value={username} onChange={changeHandler1}/>
        <input type='password' placeholder='enter password' name='password' value={password} onChange={changeHandler1}/>
        <input type='submit' name='submit'/>

      </form>
    </div>
    </center>
   </>);
   
}

export default App;*/