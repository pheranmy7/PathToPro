import React from 'react'
import {useForm} from 'react-hook-form';


function Feedback(){
  
    const{register,
    handleSubmit, 
    formState: { errors },
    reset,
    trigger,
    //watch,
    
   } = useForm();


 const onSubmit = (data) => { 
     console.log(data);
     reset();
   };

 const onError = (errors) => {
   console.log(errors);
 };


   //console.log(watch());
   //console.log(errors);
  return (
    <React.Fragment>
      <body className="bodyCon">
            <div className="containerContact">
   
          <form className="con" action="/action_page.php" onSubmit={handleSubmit (onSubmit,onError)} >  
           
              <h1 className="con"style={{ color: 'red'  }}>Contact Us @ <br/>
                 Path to Pro</h1>
              <p className="con"style={{ color: 'red'  }}>Please fill this form with a message. We will get back in 24 hours.</p>
             
              <input className={`Contact ${errors.Name && "Invalid"}`} type="text" name="Name" placeholder="Name"  
          {...register("Name", {required: 'Name is required',
          pattern: {
            value: /^[a-z]*$/,
            message: "Only letters are allowed"
           },
          })}
          onKeyUp={() => {
            trigger("Name");
          }}
          />
              {errors.Name && (<small>{errors.Name.message}</small>)}

              <input className={`Contact ${errors.Email && "Invalid"}`} type="email" name="Email" placeholder="Email"   
           {...register("Email", {required: 'Email is required'  , 
        })} 
          />
              {errors.Email && (<small>{errors.Email.message}</small>)}

              <textarea className={`Contact ${errors.Message && "Invalid"}`}type="text" name="Message" placeholder="Enter Message"   
           {...register("Username", {required: 'Message is required', 
        minLength: {
        value: 10,
        message: "Minimum Required length is 10"
    },
        maxLength: {
        value: 100,
        message: "Maximum allowed length is 100",
    }
       })} 
onKeyUp={() => {
  trigger("Message");
}}
>
</textarea>
{errors.Message && (<small>{errors.Message.message}</small>)}

              <input className="Contact"  type="submit" value="Submit" />
          </form>
      </div>
      </body>
    </React.Fragment>
  )
}

export default Feedback