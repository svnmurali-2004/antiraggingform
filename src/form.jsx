import axios from "axios"
import {useState} from "react";
function Form(){
    const [formdata,setFormdata]=useState({name:"",rollnumber:"",query:"",email:"",phonenumber:""});
    const {name,rollnumber,query,email,phonenumber}=formdata
    const submitHandler=e=>{
        e.preventDefault()
        axios.post("http://localhost:5000/dataentry",formdata).then(console.log("form submitted successfully"))
       
    }
    const changeHandler=e=>{
        const {name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }
    return (<>
    <main id="main" class="flex items-center bg-gray-100  justify-center h-screen">
        <form onSubmit={submitHandler}>
            <div class="bg-white rounded border-solid w-96 p-6 shadow-sm border-black bg-white bg-opacity-1">
                <h1 class=" text-xl text-center italic font-semibold">Registration Form</h1>
            
                <label for="name" >enter name </label>
                <input type="text" class=" bg-gray-100 text-gray-500 px-1 w-full" id="name" name="name" placeholder="enter the name" value={name} required onChange={changeHandler}/>
                <label for="email" >Email</label>
                <input type="email" class=" bg-gray-100 text-gray-500 px-1 w-full" id="email" name="email" placeholder="Email" value={email} required onChange={changeHandler}/>
                <label for="phonenumber" >phonenumber</label>
                <input type="phonenumber" class=" bg-gray-100 text-gray-500 px-1 w-full" id="phonenumber" name="phonenumber" placeholder="phonenumber" value={phonenumber} required onChange={changeHandler}></input>
                <label for="rollnumber" >rollnumber</label>
                <input type="rollnumber" class=" bg-gray-100 text-gray-500 px-1 w-full" id="rollnumber" name="rollnumber" placeholder="rollnumber" value={rollnumber} required onChange={changeHandler}/>
                
                <label for="query" >Query</label><br/>
                <input type="textbox" class=" bg-gray-100 text-gray-500 px-1 w-full" id="query" name="query" placeholder="query" value={query} required onChange={changeHandler}/>
                <input type="checkbox" id="checkbox" />
                <label for="checkbox">agree terms and condions</label>
                <input class=" place-self-center w-full rounded text-center bg-blue-500 font-semibold text-white hover:bg-blue-600 action:bg-green-600" type="submit" id="submit" name="submit"/>
                
            </div>  
        </form>
        
    </main>
    <footer>
        <div id="table" >
            hello
        </div>
        
    </footer>
    </>);
}
export default Form;