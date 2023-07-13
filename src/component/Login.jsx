import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>

      <div className="container ps-md-0 bg-white mt-">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image mt-5" ></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto mt-5">
                    <h3 className="login-heading mb-4"><b>Hey Welcome!</b></h3>


                    <form>
                      <div className="form-floating mb-2 y-4">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-4">
                        <input type="password" className="form-control " id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                      </div>

                      <div className="form-check mb-">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                        <label className="form-check-label" for="rememberPasswordCheck">
                          Remember password
                        </label>
                      </div>

                      <div className="container ms-5">
                        
                      <div className="">
                      <a className="small text-right" href="#">Forgot password?</a>
                      </div>
                      

                        <div className="row ms-5">
                          <div className="ms-5">

                            <div className="d-grid ms-5">
                              <NavLink to="/Hero"><button type="submit" className="btn btn-warning ms-5">SIGN IN</button></NavLink>
                            </div>

                          </div>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
