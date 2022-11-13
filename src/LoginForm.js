import React from 'react'
import './LoginForm.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaGoogle, FaFacebook, FaTwitter} from 'react-icons/fa';


function LoginForm() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""

    })
    const [submitted, setSubmitted]= useState(false);
    const [valid, setValid] = useState(false);

    const handleChange=(e)=>{
        setValues({...values, 
              firstName: e.target.value,
              lastName: e.target.value, 
              email: e.target.value,
              password: e.target.value
            })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()  //prevent refreshing
        setSubmitted(true);
        // ony register user if values are Valid.
        if(values.firstName && values.lastName && values.email && values.password)
        setValid(true);

    }
  return (
    <div className='Login-Form'>
    <h1>Welcome!!</h1>
    <form className='login' onSubmit={handleSubmit}>
        {submitted && valid ? <div className='register'>Success!..Thank you for Registering</div> :null }
        
        <input values={values.firstName} onChange={handleChange} type="text" name="firstName" placeholder= "First name" /> <br />
        {submitted && !values.firstName ?<span>Please enter first name</span> : null }
        
        <input  values={values.lastName} onChange={handleChange} type="text" name="lastName" placeholder= "Last name" /> <br />
        {submitted && !values.lastName ? <span>Please enter last name</span> : null }
        
        <input values={values.email} onChange={handleChange} type="text" name="email" placeholder= "Input Email Address" /> <br />
        {submitted && !values.email ? <span>Please enter email address</span> : null }
        
        <input  values={values.password} onChange={handleChange} type="text" name="password" placeholder= "Input Password" /> <br />
        {submitted && !values.password ? <span>Please enter password</span> : null } <br /> 
        
        <Link to='/taxcalculator'>
        <button className='btn' type='submit' onClick={handleSubmit}>Register</button>
        </Link>        
       
    </form>

       <div className='socials'>
          <FaGoogle />
          <FaFacebook />
          <FaTwitter />
       </div> 
      
    </div>
  )
}

export default LoginForm
