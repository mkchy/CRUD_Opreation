import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [joining, setJoining] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios.post(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/fakeData`, {
      firstName,
      lastName,
      joining,
      state,
      gender,
    });

    if (firstName === "") {
      toast.error("FirstName Is Required");
    } else if (lastName === "") {
      toast.error("LastName Is Required");
    } else if (joining === "") {
      toast.error("Date Is Required");
    } else {
      toast.success("Create NewUser Successfully");
      navigate("/list");
    }
  };

  return (
    <div className="container mt-4 mb-5">
        <h4 className="text-center text-success mt-2">Create New Student Details</h4>
      <form className="mt-4 shadow-lg p-3">
        <div className="form-group col-md-4 m-3">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4 m-3">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4 m-3">
          <label>Date of Joining</label>
          <input
            className="form-control"
            type="date"
            format="YYYY-MM-DD"
            placeholder=""
            onChange={(e) => setJoining(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4 m-3">
          <label>State</label>
          <select
            className="form-control"
            onChange={(e) => setState(e.target.value)}
          >
            <option>Select State</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>UP</option>
            <option>Mumbai</option>
            <option>Goa</option>
            <option>Delhi</option>
          </select>
        </div>

        <div
          className="form-group col-md-4 m-3"
          onChange={(e) => setGender(e.target.value)}
        >
          <label>Gender</label>
          <br></br>
          <input type="radio" value="Male" name="gender" />{" "}
          Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" value="Female" name="gender" />{" "}
          Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        <div className="col-md-4 m-3">
        <button className="btn btn-primary" type="submit" onClick={postData}>
          Submit
        </button>
        <Link to="/list">
          <button className="btn btn-primary m-3">Back</button>
        </Link>
        </div>
      </form>
    </div>
  );
}
