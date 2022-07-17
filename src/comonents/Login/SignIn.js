import React, {useState} from "react";
import Admin from "../../images/admin.jpg";
// import Footer from "./Footer";
// import "./Home.css";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const user = localStorage.getItem("email") ?
localStorage.getItem("email") : "mkchaudhary@gmail.com";
const userPwd = localStorage.getItem("password") ?
localStorage.getItem("password"):"manohar";

  const handleSubmit =() =>{
    // e.preventDefult();
    if(email === user && password === userPwd){
      toast.success('Login successfully')
      navigate("/list");
    }else{
      toast.error('Invailid Email & Password')
    }
  };

  return (
    <div>
      <div className="container">

        <div className="row mt-5">
          <div className="col-md-4 card">
            <h1 className="text-center text-while text-success">Login Form</h1>
            <label htmlFor="email">EmailId</label>
            <input
              type="email"
              className="form-control"
              placeholder="EmailId"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="mt-3">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name=""
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div>
              <h6 className="text-center mt-4">
                Don't Have An Account ?
                <Link className="" to="/signup">
                  NewUser
                </Link>
              </h6>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3 mb-4"
              name="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            {/* <h4 className="form-control power">Powered By ISOFT</h4> */}
          </div>

          <div className="col-md-8">
            <img src={Admin} alt="" />
          </div>
        </div>
        
      </div>
      {/* <Footer /> */}
    </div>
  )
}
