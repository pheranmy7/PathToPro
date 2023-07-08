import React from 'react'
import {Link} from 'react-router-dom' 
import {useForm} from 'react-hook-form';
import axios from 'axios';
//import { useState } from 'react';
//const url = 'http://localhost:4001/app/Sign';

function Sign() {
  
  const onSubmit = (data) => { 
    console.log(data);
    reset();

    
    axios.get(' http://localhost:4001/app/Sign', register)
    .then(response => console.log(response.data))

    window.location = './User'
  };
       
  const{
    register,
    handleSubmit,
   formState: { errors },
    reset,
    trigger,
   // watch,
   } = useForm();

const onError = (errors) => {
  console.log(errors);
};

//console.log(watch());

  return (
    <React.Fragment>
      <body className="bodyS" 
      style={{ backgroundImage: "url(assets/img/signS.jpg)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
        width:'100%',
        }}>
  
    <div className="signinS">
        <form className="siI" onSubmit={handleSubmit (onSubmit, onError)}>
          <h2 className="siI">Sign In</h2>                                                                                                                                             
          <input className={`siI ${errors.Username && "Invalid"}`} type="text" name="Username" placeholder="Enter Username" 
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

          <input className={`siI ${errors.Password && "Invalid"}`} type="text" name="Password" placeholder="Enter Password"
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

          <p className="siI" style={{textAlign: "left"}}><input type="checkbox" style= {{width: "15px height: 14px"}} />I agree with the <Link to= "/Privacy">Terms</Link></p>
          <button className="btnSI">Sign In</button>
        </form>
      </div>
      </body>
    </React.Fragment>
  )
}

export default Sign

/*style={{ 
  backgroundImage: `url("https://via.placeholder.com/500")` [using external url]
}}> */ 

/*  style={{ backgroundImage: `url(${background})` }}> [using from the src folder..importing it first]
*/

/* style={{ backgroundImage: "url(/image.png)",
backgroundRepeat: 'no-repeat',
  width:'250px'  }}> [relative url method]
*/

/*  style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})` [absolute url method]
}}>*/