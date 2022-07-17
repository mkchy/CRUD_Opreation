import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Update() {
  const navigate = useNavigate();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [dob, setDob] = useState("");
  const [doc, setDoc] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setMiddleName(localStorage.getItem("Middle Name"));
    setLastName(localStorage.getItem("Last Name"));
    setDob(localStorage.getItem("Date of Birth"));
    setEmail(localStorage.getItem("Email Id"));
    setMobile(localStorage.getItem("Mobile No"));
    setAddress(localStorage.getItem("Address"));
    setCity(localStorage.getItem("City Name"));
    setState(localStorage.getItem("State Name"));
    setPinCode(localStorage.getItem("Pin Code"));
    setDoc(localStorage.getItem("Document"));
    setGender(localStorage.getItem("Gender Name"));
    setMessage(localStorage.getItem("Message"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    axios
      .put(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/CRUD/${id}`, {
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        address,
        city,
        state,
        pinCode,
        dob,
        doc,
        gender,
        message,
      })
      .then(() => {
        navigate("/list");
      });
  };

  return (
    <div className="container card mt-4">
      <h1 className="text-center text-success">Update Student Details</h1>
      <Form>
        <div className="row">
          <div className="col-4">
            <FormGroup>
              <Label for="fname">First Name</Label>
              <Input
                id="fname"
                name="fname"
                placeholder="FirstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="mnane">Middle Name</Label>
              <Input
                id=""
                name=""
                placeholder="MiddleNmae"
                type=""
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="lnane">Last Name</Label>
              <Input
                id="lname"
                name="lname"
                placeholder="LastNmae"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="mob">Mobile NO</Label>
              <Input
                id="mob"
                name="mob"
                placeholder="MobileNo"
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="add">Address</Label>
              <Input
                id="add"
                name="add"
                placeholder="Address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="City"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                id="ss"
                name="select"
                type="select"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option>Select State</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Delhi</option>
                <option>Punjab</option>
                <option>Goa</option>
              </Input>
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="pcode">Pin Code</Label>
              <Input
                id="pcode"
                name="pcode"
                placeholder="PinCode"
                type="number"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <FormGroup>
              <Label for="dob">DOB</Label>
              <Input
                id="dob"
                name="bod"
                placeholder="DateofBirth"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup>
              <Label for="file">Document</Label>
              <Input
                id="file"
                name="file"
                // type="file"
                value={doc}
                onChange={(e) => setDoc(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="col-4">
            <FormGroup value={gender} onChange={(e) => setGender(e.target.value)}>
              <FormGroup >
                Gender
              </FormGroup>
              <FormGroup check inline>
                <Input type="radio" value="Male"/>
                <Label>Male</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="radio" value="Female"/>
                <Label>Female</Label>
              </FormGroup>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                id="message"
                name="message"
                type="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
        <div className="text-center mb-3">
          <Button
            color="primary"
            tag="input"
            type="submit"
            value="Update"
            onClick={updateAPIData}
          />{" "}
          <Button color="primary" tag="input" type="reset" value="Reset" />{" "}
          <Link to="/list">
            <Button color="primary">Back</Button>{" "}
          </Link>
        </div>
      </Form>
    </div>
  );
}
