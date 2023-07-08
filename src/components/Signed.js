import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
//import { useState } from 'react';
//const url = 'http://localhost:4000/app/Signed';

function Signed() {    
     
    const{
      register,
      handleSubmit,
     formState: { errors },
      reset,
      trigger,
     // watch,
     } = useForm();

     const onSubmit = (data) => { 
      data.preventDefault()
      console.log(data);
      reset();

      axios.post(' http://localhost:4000/app/Signed', register)
      .then(response => console.log(response.data))

      window.location = './User'
    };

  const onError = (errors) => {
    console.log(errors);
  };

//console.log(watch());

  return (
<React.Fragment>
  <body className="bodySS"
  style={{ backgroundImage: "url(assets/img/landing.png)",
    }}>
<div className="signinS">
        <form className="siO" onSubmit={handleSubmit (onSubmit, onError)} >
          <h2 className="siO">Sign Up</h2>
          <input className={`siO ${errors.Surname && "Invalid"}`} type="text" name="Surname" placeholder="Surname"  
          {...register("Surname", {required: 'Surname is required',
          pattern: {
            value: /^[a-z]*$/,
            message: "Only letters are allowed"
           },
          })}
          onKeyUp={() => {
            trigger("Surname");
          }}
          />
              {errors.Surname && (<small>{errors.Surname.message}</small>)}

          <input className={`siO ${errors.Othername && "Invalid"}`} type="text" name="Othername" placeholder="Other Name"  
           {...register("Othername", {required: 'Othername is required',
           pattern: {
            value: /^[a-z]*$/,
            message: "Only letters are allowed"
           },
          })}
          onKeyUp={() => {
            trigger("Othername");
          }} 
           /> 
              {errors.Othername && (<small>{errors.Othername.message}</small>)}

          <input className={`siO ${errors.Email && "Invalid"}`} type="email" name="Email" placeholder="Email"
           {...register("Email", {required: 'Email is required'  , 
           pattern: {
            value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
            message: "Invalid Email"
           },
          })}
          onKeyUp={() => {
            trigger("Email");
          }}
           />
              {errors.Email && (<small>{errors.Email.message}</small>)}

          <input className={`siO ${errors.Username && "Invalid"}`}type="text" name="Username" placeholder="Enter Username"
           {...register("Username", {required: 'Username is required', 
           pattern: {
            value: /^[a-z]*$/,
            message: "Only letters are allowed"
           },
          })}
          onKeyUp={() => {
            trigger("Username");
          }}
           />
              {errors.Username && (<small>{errors.Username.message}</small>)}

          <input className={`siO ${errors.Password && "Invalid"}`} type="password" name="Password" placeholder="Password"
           {...register("Password", {required: 'Password is required',
           minLength: {
            value: 10,
            message: "Minimum Required length is 10"
           },
          })} 
          onKeyUp={() => {
            trigger("Password");
          }}
           />
              {errors.Password && (<small>{errors.Password.message}</small>)}

          <input className={`siO ${errors.ConfirmPassword && "Invalid"}`}type="password" name="ConfirmPassword" placeholder="Confirm Password"
           {...register("ConfirmPassword", {required: 'Password does not match' ,
           minLength: {
            value: 10,
            message: "Minimum Required length is 10"
           }, 
          })} 
          onKeyUp={() => {
            trigger("ConfirmPassword");
          }}
           />
              {errors.ConfirmPassword && (<small>{errors.ConfirmPassword.message}</small>)}
              
          <p className="siO" style={{textAlign: "left"}}><input type="checkbox" style={{width: "15px height: 14px"}} />I agree with the <Link to= "/Privacy">Terms</Link></p>
          <button className="btnSO">Sign Up</button>
        </form>
      </div>
      </body>
</React.Fragment>
  )
}

export default Signed
