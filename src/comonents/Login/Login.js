import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { toast } from "react-toastify";
// import Admin from "../images/admin.jpg";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const[message,setMessage]=useState("");
  const navigate = useNavigate();

  const user = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "mkchaudhary@gmail.com";
  const userPwd = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "manohar";

  const handleSubmit = () => {
    if (email === user && password === userPwd) {
      toast.success("Login successfully");
      navigate("/list");
    } else {
      toast.error("Invailid Email & Password");
    }

    // const regEx = 
    // if(regEx.test(email)){
    //   setMessage("Email is Invalid");
    // }else if(!regEx.test(email) && email ){

    // }
  };

  return (
    <div className="container card mt-4">
      <h1 className="text-center text-success">Login Form</h1>
      <Form>
        <div className="row">
          <div className="col-4">
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name=""
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name=""
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div className="text-center mb-3">
              <Button
                color="primary"
                tag="input"
                type="submit"
                // value="Login"
                onClick={handleSubmit}
              />{" "}
              <Button color="primary" tag="input" type="reset" value="Reset" />{" "}
            </div>
          </div>

          <div className="col-8">
          {/* <img src={Admin} alt="" /> */}
          </div>
        </div>
      </Form>
    </div>
  );
}
