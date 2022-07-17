import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Registration() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefult();
    if (firstName === "") {
      toast.error("FirstName Is Required");
    } else if (lastName === "") {
      toast.error("LastName Is Required");
    } else if (email === "") {
      toast.error("Email Is Required");
    } else if (mobile === "") {
      toast.error("MobileNo Is Required");
    } else if (password === "") {
      toast.error("Password Is Required");
    } else {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("mobileNo", mobile);
      localStorage.setItem("password", password);
      toast.success("User Resistration Successfully");
      navigate("/");
    }
  };

  return (
    <div className="container card mt-4">
      <h1 className="text-center text-success">User Registration Form</h1>
      <Form>
        <div className="row">
          <div className="col-4">
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="FirstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="LastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mobile">Mobile</Label>
              <Input
                id="mobile"
                placeholder="Mobile"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
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
                value="Submit"
                onClick={handleSubmit}
              />{" "}
              <Link to="/">
                <Button color="primary">Back</Button>{" "}
              </Link>
              <Button color="primary" tag="input" type="reset" value="Reset" />{" "}
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
