import { useForm } from "react-hook-form";
import style from "./UserProfile.module.css"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function UserProfile() {
    let { state } = useLocation();
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset
    
  } = useForm();

  
  useEffect(() => {
    if (state) {
      reset(state);
    }
  }, [state]);


 

  return (
    <>
      <div className={style.data}>
        <h1>Profile</h1>

        <hr />
     

        <div className={style.userdata}>
                {/* <div className="photo ">
                <img src={state?.image} alt="user" />
              </div> */}
              
          <form >
            <div className={style.formitem}>
           
              <div className="div1">
            
                <div className="m-3">
                  <label htmlFor="firstname" style={{ color: "#6C6C6C" }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("firstName", {
                      required: "user name is requird !",
                      pattern: {
                        value: /^[A-Za-z]{2,20}$/,
                        message: "Please enter a valid first name",
                      },
                    })}
                    placeholder="Enter your First Name"
                  />
                  {errors.firstName && (
                    <p className="alert alert-danger">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

           
                <div className="m-3">
                  <label htmlFor="email" style={{ color: "#6C6C6C" }}>
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("email", {
                      required: "email is requird !",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="alert alert-danger">{errors.email.message}</p>
                  )}
                </div>

                <div className="m-3">
                  <label style={{ color: "#6C6C6C" }}>
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("phonenumber", {
                      required: "phone-number is requird !",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      },
                    })}
                    placeholder="Enter your phone Number"
                  />
                  {errors.phonenumber && (
                    <p className="alert alert-danger">
                      {errors.phonenumber.message}
                    </p>
                  )}
                </div>
              </div>

     
              <div className="div2">

                <div className="m-3">
                  <label style={{ color: "#6C6C6C" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("lastName", {
                      required: "lastname is requird !",
                    })}
                    placeholder="Enter your Last Name"
                  />
                  {errors.lastName && (
                    <p className="alert alert-danger">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="m-3">
                  <label style={{ color: "#6C6C6C" }}>
                    Gender
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("gender", {
                      required: "gender is requird !",
                    })}
                    placeholder="Enter your Gender"
                  />
                  {errors.gender && (
                    <p className="alert alert-danger">{errors.gender.message}</p>
                  )}
                </div>

                <div className="m-3">
                  <label style={{ color: "#6C6C6C" }}>
                    Age
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("age", {
                      required: "age is requird !",
                    })}
                    placeholder="Enter your age"
                  />
                  {errors.age && (
                    <p className="alert alert-danger">{errors.age.message}</p>
                  )}
                </div>

              </div>
            </div>

      
          </form>
        </div>
      </div>
    </>
  );
}





