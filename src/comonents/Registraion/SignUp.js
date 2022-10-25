import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (firstName === "") {
      toast.error("FirstName Is Required");
    } else if (lastName === "") {
      toast.error("LastName Is Required");
    } else if (mobileNo === "") {
      toast.error("MobileNo Is Required");
    } else if (email === "") {
      toast.error("Email Is Required");
    } else if (password === "") {
      toast.error("Password Is Required");
    } else {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("mobileNo", mobileNo);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      toast.success("Create New User Successfully");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12">
            <h4 className="text-center text-success">Create New User</h4>
          </div>
        </div>

        <div className="card col-lg-12">
          <div className="row mt-3 m-3">
            <div className="col-md-4">
              <label htmlFor="text">
                First Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="text">
                Last Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="LasttName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-3 m-3">
            <div className="col-md-4">
              <label htmlFor="text">
                Mobile No.<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="MobileNumber"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="email">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="EmailId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-3 m-3">
            <div className="col-md-4">
              <label htmlFor="password">
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 text-center mt-3 mb-4">
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={handleSubmit}
              >
                Create
              </button>
              <Link to="/">
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
