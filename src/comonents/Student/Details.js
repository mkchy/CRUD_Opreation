import React from "react";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="container">
      <h4 className="text-center text-success mt-2">
        Show all Student Details
      </h4>
      <form className="card mt-4">
        <div className="row m-3">
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
              Last Name : {""}
              {localStorage.getItem("Last Name")
                ? localStorage.getItem("Last Name")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Date of joining : {""}
              {localStorage.getItem("Date of Joining")
                ? localStorage.getItem("Date of Joining")
                : "NA"}
            </h6>
          </div>
        </div>

        <div className="row m-3">
          <div className="col-4">
            <h6>
              State Name : {""}
              {localStorage.getItem("StateName")
                ? localStorage.getItem("StateName")
                : "NA"}
            </h6>
          </div>
          <div className="col-4">
            <h6>
              Gender : {""}
              {localStorage.getItem("GenName")
                ? localStorage.getItem("GenName")
                : "NA"}
            </h6>
          </div>
        </div>
        <div className="row text-center">
        <Link to="/list">
          <button className="btn btn-primary m-2">Back to List</button>
        </Link>
        </div>
      </form>
    </div>
  );
}
