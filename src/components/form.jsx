import React,{useState} from 'react'
import './styles/form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const form = () => {
 const[showPassword,setShowPassword]=useState(false);
  const[userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
 const toggleShowPassword=()=>{

setShowPassword(()=>!showPassword);
  }
 
  const submitHandler=(e)=>{
    e.preventDefault();
    setPassword('')
      setUserName('');
  }
 
  return (
    <>
    <form action="" className='form' onSubmit={submitHandler}>
  
    <h3>Have an account?</h3>

      <input type="text"  placeholder='Username'
      value={userName}
     onChange={e=>setUserName(e.target.value)}
     className='form_input' required/>
    
    <div className="password_div">
        
        <input type={showPassword?'text':'password'} 
         placeholder='password' 
         value={password}
         onChange={e=>setPassword(e.target.value)}
         className='form_input'required/>

        <FontAwesomeIcon 
        onClick={toggleShowPassword}
        icon={showPassword?faEyeSlash:faEye} 
        color="white" 
        size="sm" 
        className='font-icon'
        />
        </div>
       
        
    <button type='submit' className='form_btn'>SIGN IN</button>
     
    </form>

     <div className='form_footer'>

      <div className='form_remember'>

    <input type="checkbox" className='input_radio'/> <span >Remember Me</span>
      </div>
   <span><a href="#">

     Forgot Password?
   </a>
     </span>
     </div>
    
    </>
  )
}

export default form