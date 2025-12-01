import { useForm } from 'react-hook-form';
import style from './Login.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify/unstyled";


export default function Login() {
  let navigate= useNavigate();
  let{register,
    handleSubmit,
    formState:{errors}
  }= useForm();

  const onSubmit =async (data:any)=>{
    try{ 
      let response = await axios.post('https://dummyjson.com/auth/login',data);
       toast.success('Wow so easy !');
      navigate('/home/users-list')
      console.log(response)

    }catch(error){
      toast.error("bazz")

    }

  }





  return (
    <div className="vh-100 auth-container">
      <div className="container-fluid">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-5">
            <div
              className={`${style.login} bg-white py-5 px-3`}
              style={{
                borderRadius: '25px',
                width: '460px',
                height: '550px',
              }}
            >
              <h1
                className={`${style.fontt} h4 `}
                style={{
                  paddingLeft:'32px',
                  paddingTop:'5px'
                }}
              >
                User Management System
              </h1>

              <div className="text-center my-5">
                <h3
               
                  className={style.fontt}
                >
                  SIGN IN
                </h3>
                <p className="text-muted">
                  Enter your credentials to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email" style={{ color: '#6C6C6C' }}>
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("username",{
                      required:'username is requird'
                    })}
                    placeholder="Enter your email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  {errors.username&&<p className='alert alert-danger'>{errors?.username.message}</p>}

                  <label htmlFor="password" style={{ color: '#6C6C6C' }}>
                    Password
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    {...register("password",{
                      required:'password is requird',
                      // pattern:{
                      //   value:/^[A-Z][a-z]{7,}$/,
                      //   message:'password should be at lest 8 charcter'
                      // }
                    })}
                    placeholder="Enter your password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                {errors.password&&<p className='alert alert-danger'>{errors?.password.message}</p>}

                <div className="d-grid py-4">
                  <button
               
                    className={`${style.fontt} btn btn-warning text-white`}
                    type="submit"
                    style={{ width: '422px', height: '44px' , fontSize:'15px',fontWeight:'400'}}
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

