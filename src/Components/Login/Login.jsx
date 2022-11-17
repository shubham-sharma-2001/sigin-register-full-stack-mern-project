import React,{useState} from 'react'
import './Login.css'
import axios from 'axios'
import swal from 'sweetalert'
import { useHistory } from "react-router";



const Login = ({setLoginUser}) => {

  let history = useHistory();
  
  const [user,setUser]=useState({
   
    email:"",
    password:""
    
  })
  
  const handleChange =(event)=>{
    const{name,value}=event.target;
    // console.log(user)
  
    setUser({
      ...user,
      [name]:value
    })
  }

  const login =()=>{
    axios.post("http://localhost:9001/login",user)
    .then(res=> {
      swal(res.data.message)
      setLoginUser(res.data.user)
      history.push('/')

    }
      
      
      )
    // .then(res=> console.log(res))


  }
  return (
    <div className='login_form'>

        <div className="login">
            <h2>Login</h2>
            <input type="text"  name="email" value={user.email} onChange={handleChange} placeholder='Enter Your Email'/>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder='Enter Your Password'/>

            <button className="button" onClick={login}>Login</button>
            
            <span>or</span>
            <button className="button" onClick={()=> history.push("/register")}>Register</button>

            

        </div>
    </div>
  )
}

export default Login