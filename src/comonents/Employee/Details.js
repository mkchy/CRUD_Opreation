import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "reactstrap";

export default function Details() {
  return (
    <div className="container card mt-4">
      <h1 className="text-center text-success">Student Show all Details</h1>
      <Form>
        <div className="row">
          <div className="col-4">
            <h6>
              First Name : {""}
              {localStorage.getItem("First Name")
                ? localStorage.getItem("First Name")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Middle Name : {""}
              {localStorage.getItem("Middle Name")
                ? localStorage.getItem("Middle Name")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Last Name : {""}
              {localStorage.getItem("Last Name")
                ? localStorage.getItem("Last Name")
                : "NA"}
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h6>
              Email :{" "}
              {localStorage.getItem("Email Id")
                ? localStorage.getItem("Email Id")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Mobile No : {""}
              {localStorage.getItem("Mobile No")
                ? localStorage.getItem("Mobile No")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Address : {""}
              {localStorage.getItem("Address")
                ? localStorage.getItem("Address")
                : "NA"}
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h6>
              City :{" "}
              {localStorage.getItem("City Name")
                ? localStorage.getItem("City Name")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              State : {""}
              {localStorage.getItem("State Name")
                ? localStorage.getItem("State Name")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Pin Code : {""}
              {localStorage.getItem("Pin Code")
                ? localStorage.getItem("Pin Code")
                : "NA"}
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h6>
              Date of Birth :{" "}
              {localStorage.getItem("Date of Birth")
                ? localStorage.getItem("Date Of Birth")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Document : {""}
              {localStorage.getItem("Document")
                ? localStorage.getItem("Document")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Gender : {""}
              {localStorage.getItem("Gender Name")
                ? localStorage.getItem("Gender Name")
                : "NA"}
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h6>
              Message : {" "}
              {localStorage.getItem("Message")
                ? localStorage.getItem("Message")
                : "NA"}
            </h6>
          </div>
        </div>

        <div className="text-center mb-3">
          <Link to="/update">
            <Button color="primary">Update</Button>{" "}
          </Link>
          <Link to="/list">
            <Button color="primary">Back</Button>{" "}
          </Link>
        </div>
      </Form>
    </div>
  );
}
