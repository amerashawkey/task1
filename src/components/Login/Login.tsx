import style from './Login.module.css'



export default function Login() {
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

              <form>
                <div className="mb-3">
                  <label htmlFor="email" style={{ color: '#6C6C6C' }}>
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    placeholder="Enter your email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />

                  <label htmlFor="password" style={{ color: '#6C6C6C' }}>
                    Password
                  </label>
                  <input
                    type="text"
                    className={`${style.inputt} input form-control my-2`}
                    placeholder="Enter your password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="d-grid py-4">
                  <button
                    className={`${style.fontt} btn btn-warning text-white`}
                    type="button"
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

