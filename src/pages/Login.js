import React, { useState } from "react";
import axios from "axios";
import Profile from "../pages/Profile";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {"email":email, "password":password};
    console.log(formData)
    axios({
      // Endpoint to send files
      url: "http://localhost:5000/api/signin",
      method: "POST",
      headers: {
          authorization: "your token comes here",
      },
      data: formData,
  })
      // Handle the response from backend here
      .then((res) => {
        console.log(res.data.user.fullName)
        setFullName(res.data.user.fullName)
        setLoggedIn(true)
      })

      // Catch errors if any
      .catch((err) => {alert(err.response.data.message)});
  };

  
  if (loggedIn){
    return <Profile fullName={fullName} email={email}/>
  }


  return (
          <section className="vh-100" style={{backgroundColor: "#eee;"}}>
            <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: "25px;"}}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-6 d-flex align-items-center">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid" alt="Sample"/>

                      </div>
                      <div className="col-md-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                        <form className="mx-1 mx-md-4"  method="post" onSubmit={handleSubmit}>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" 
                                placeholder="Email"
                                value={email}
                                name="email"
                                onChange={(event) => setEmail(event.target.value)} />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input id="form3Example4c" className="form-control" 
                              placeholder="Password"
                              value={password}
                              name="password"
                              onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <label className="form-check-label" for="form2Example3">
                              Don't have an account? <a href="/">Click here to Register</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">Login</button>
                          </div>

                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  );
};

export default RegisterForm;
