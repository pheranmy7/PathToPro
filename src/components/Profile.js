import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';
//import { useState } from 'react';
//const url = 'http://localhost:4002/app/Profile'

function Profile() { 

    const{
      register,
      handleSubmit,
     formState: { errors },
      reset,
      trigger,
     // watch,
     } = useForm();

     const onSubmit = (data) => { 
      console.log(data);
      reset();

      axios.post(' http://localhost:4002/app/Profile', register)
      .then(response => console.log(response.data))
    };

     const onError = (errors) => {
       console.log(errors);
     };
   
       //console.log(watch());
   
  return (
    <React.Fragment>
      <body className='bodyU'>
         <div className="side-menuU">
        <ul className="prof">
            <li className="prof"><img className="prof" src="assets/img/7632690_dashboard_graph_analytics_report_icon.png" alt="" />&nbsp;<span><Link to="/Dashboard">Dashboard</Link></span></li>
            <li className="prof"><img className="prof" src="assets/img/bills_cash.png" alt="" />&nbsp;<span><Link to="/About">Pay Bills</Link></span></li>
            <li className="prof" style={{ color: 'red'  }}><img className="prof" src="assets/img/user_icon.png" alt="" />&nbsp;<span><Link to="/Profile">Profile Update</Link></span></li>
            <li className="prof"><img className="prof" src="assets/img/3440922_bag_basket_cart_ecommerce_remove_icon.png" alt="" />&nbsp;<span> <Link to="/About">Purchase Book</Link></span></li>
            <li className="prof"><img className="prof" src="assets/img/history_order_icon.png" alt="" />&nbsp;<span> <Link to="/History">Purchase History</Link></span></li>
            <li className="prof"><img className="prof" src="assets/img/374629_card_contact_info_sketch_sketchy_icon.png" alt="" />&nbsp;<span> <Link to="/Info">Contact info</Link></span> </li>
            <li className="prof"><img className="prof" src="assets/img/28363_door_exit_logout_mail_out_icon.png" alt="" />&nbsp; <span><Link to="/Home">Log out</Link></span></li>
          
        </ul>
    </div> 

    <div className="containerU">
        <div className="headerU">
            <div className="navU">
              
                <div className="userU"> 
                <Link to="/Home" className="btnU">Log-Out</Link>
                    <img className="prof" src="assets/img/3643784_bell_notification_notify_reminder_ring_icon.png" alt="" />
                    <div className="img-caseU">
                        <img className="prof" src="assets/img/user_icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="signinU">
            <form className="formU" onSubmit={handleSubmit (onSubmit, onError)}>
              <h2 className="prof">PROFILE</h2>

              <input className={`prof ${errors.Surname && "Invalid"}`} type="text" name="Surname" placeholder="Surname"
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

              <input className={`prof ${errors.Othername && "Invalid"}`} type="text" name="Othername" placeholder="Other Name"   
           {...register("Othername", {required: 'Othername is required' ,
           pattern: {
            value: /^[a-z]*$/,
            message: "Only letters are allowed"
           },
          })}
          onKeyUp={() => {
            trigger("Othername");
          }}     /> 
              {errors.Othername && (<small>{errors.Othername.message}</small>)}

              <input className={`prof ${errors.Email && "Invalid"}`} type="email" name="Email" placeholder="Email"
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


              <input className={`prof ${errors.Username && "Invalid"}`}type="text" name="Username" placeholder="Enter Username"
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

              <input className={`prof ${errors.Password && "Invalid"}`} type="password" name="Password" placeholder="Password"   
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

             <input className={`prof ${errors.ConfirmPassword && "Invalid"}`}type="password" name="ConfirmPassword" placeholder="Confirm Password"  
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

              <button className="btnU">UPDATE</button>
            </form>
          </div>
          </body>
    </React.Fragment>
  )
}

export default Profile