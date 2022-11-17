import React ,{useState}from 'react'
import axios from 'axios'
import "./Register.css"
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
const Register = () => {

  let history = useHistory();
const [user,setUser]=useState({
  name:"",
  email:"",
  password:"",
  reEnterpassword:""
})

const handleChange =(event)=>{
  const{name,value}=event.target;
  console.log(user)

  setUser({
    ...user,
    [name]:value
  })
}




const register =()=>{

  
  // window.alert("working")
  const {name,email,password,reEnterpassword}=user
  if(name && email && password && (password === reEnterpassword) )
  {

    axios.post("http://localhost:9001/register",user)
    
    .then(res => {
      swal(res.data.message)
      history.push('/login')
    })
    // .then(res => console.log(res))
    
    
  }
  else
  {

    swal("Job Undone!", "Please fill the form properly", "error");
  }
}
  return (
    <div className='register_form'>
        <div className="register">
            <h2>Register</h2>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Enter Your Name'/>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder='Enter Your Email'/>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter Password'/>
            <input type="password" name="reEnterpassword" value={user.reEnterpassword} onChange={handleChange} placeholder='Re-Enter Password'/>
            <button className="button" onClick={register}>Register</button>
                <span>or</span>
            <button className="button" onClick={()=> history.push('/login')}>Login</button>

            

 
        </div>

    </div>
  )
}

export default Register