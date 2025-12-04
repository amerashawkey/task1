import { useForm  } from "react-hook-form";
import style from "./UserData.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify/unstyled";
import { useEffect } from "react";

export default function UserData() {
  let navigate = useNavigate();
  let {id} = useParams();
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
     let response = await axios.post("https://dummyjson.com/users/add", data); 
        toast.success('Wow so easy !');
      navigate("/home/users-profile", { state: data });
     
    } catch (error) {
      toast.error("sorry login again ");
    }
  };
    useEffect(() => {
    if (id) {
      axios.get(`https://dummyjson.com/users/${id}`)
        .then((res) => {
          reset(res.data); 
        })
        .catch((err) => console.log(err));
    }
  }, [id]);
  return (
    <div className={style.data}>
      <h1>{id ? "UpDate User" : "Add User"}</h1>
   
      <hr />

      <div className={style.userdata}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formitem}>
            <div className="div1  ">
              <div className="m-3 ">
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
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                {errors.firstName && (
                  <p className="alert alert-danger">
                    {errors?.firstName.message}
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
                  aria-label="Useremail"
                  aria-describedby="basic-addon1"
                />
                {errors.email && (
                  <p className="alert alert-danger"> {errors?.email.message}</p>
                )}
              </div>
              <div className="m-3">
                <label htmlFor="phonenumber" style={{ color: "#6C6C6C" }}>
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
                  aria-label="Userphonr number"
                  aria-describedby="basic-addon1"
                />
                {errors.phonenumber && (
                  <p className="alert alert-danger">
                       {/* {(errors.username as any).message} */}
                       {errors?.phonenumber.message}
                  </p>
                )}
              </div>
            </div>
            <div className="div2  ">
              <div className="m-3">
                <label htmlFor="lastname" style={{ color: "#6C6C6C" }}>
                  Last Name
                </label>
                <input
                  type="text"
                  className={`${style.inputt} input form-control my-2`}
                  {...register("lastName", {
                    required: "lastname is requird !",
                    pattern: {
                      value: /^[A-Za-z]{2,20}$/,
                      message: "Please enter a valid first name",
                    },
                  })}
                  placeholder="Enter your Last Name"
                  aria-label="Userlastname"
                  aria-describedby="basic-addon1"
                />
              </div>
              {errors.lastName && (
                <p className="alert alert-danger">  {errors?.lastName.message}</p>
              )}
              <div className="m-3">
                <label htmlFor="age" style={{ color: "#6C6C6C" }}>
                  Gender
                </label>
                <input
                  type="text"
                  className={`${style.inputt} input form-control my-2`}
                  {...register("gender", {
                    required: "gender is requird !",
                    pattern: {
                      value: /^(Male|Female)$/,
                      message: "Please enter Male, Female, or Other",
                    },
                  })}
                  placeholder="Enter your Gender"
                  aria-label="Userage"
                  aria-describedby="basic-addon1"
                />
                {errors.gender && (
                  <p className="alert alert-danger">
                    {errors?.gender.message}
                  </p>
                )}
              </div>
              <div className="m-3">
                <label htmlFor="age" style={{ color: "#6C6C6C" }}>
                Age
                </label>
                <input
                  type="text"
                  placeholder="Enter your birth Date"
                  className={`${style.inputt} input form-control my-2`}
                  {...register("age", {
                    required: "age is requird !",
                   
                  })}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                {errors.age && (
                  <p className="alert alert-danger">
                 {errors?.age.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className={style.bton}>
            <button
              className={`${style.fontt} btn btn-warning text-white`}
              type="submit"
              style={{
                width: "422px",
                height: "44px",
                fontSize: "15px",
                fontWeight: "400",
              }}
              onClick={()=>navigate(`/home/users-profile/${user.id}`)}
        
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
