import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from "axios"
import About from './about.jsx'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import Form from "./form.jsx"

function App(){
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Form/>}/>
  </Routes>
  </BrowserRouter></>);
}
/*function App() {
  
  //const [data, setData] = useState([{name:"hello",id:""}]);
  const [data, setData] = useState("");
  useEffect(() => {
    // Fetch data when the component mounts
    axios.get("http://localhost:5000/fulldata")
      .then(response => {
        setData(response.data);
        console.log("Data fetched successfully");
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (<>
  <p>hello world</p>
  <div id="division" dangerouslySetInnerHTML={{__html:data}}></div>
  </>);
}
*/
/*
function App(){
  const [data,setData]=useState({name:"",password:""})
  const {name,password}=data
  const submitHandler=e=>{
    e.preventDefault()
    
    axios.post("https://banking-2c9ff-default-rtdb.firebaseio.com/register.json",data).then(console.log("saved successfully"))
    //axios.get("https://banking-2c9ff-default-rtdb.firebaseio.com/register/-NioSH2ix40aArxRO7Uo.json",data).then(console.log("retrived successfully",data1))
  }
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  } 
  const data1={}
  return (
    <div>
    <h1>svn login form</h1>
    <p>
      this is supported by the axios
      and fire base all ur data is safe with us
    </p>
    <center>
    <div className='block1'>
    <form onSubmit={submitHandler}>
      <label htmlFor='name'>Email</label><br/>
      <input type='email' className='i1' name='name' placeholder='enter email' value={name} onChange={changeHandler}/><br/><br/>
      <label htmlFor='name'>password</label><br/>
      <input type='password'className='i1' name='password' placeholder='enter password' value={password} onChange={changeHandler}/>
      <br/>
      <input type='submit' name='submit'/>
    </form>
    <br/>
    <br/>
    <h1>{name}</h1>
    <h1>{password}</h1>
    </div>
    </center>
    
    </div>
  );
}
*/
/*
function App() {
  
  return(
  <>
 <BrowserRouter>
  <Routes>
    <Route path="/about" element={<About/>}/>
  </Routes>
  <h1>helllo</h1>
  <h1>{<About/>}</h1>
  <Link to="/about">button</Link>
  </BrowserRouter>
  
  
   </>);
   
}
*/
export default App;
