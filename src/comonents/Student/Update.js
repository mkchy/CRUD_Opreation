import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [joining, setJoining] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setJoining(localStorage.getItem("Date of Joining"));
    setState(localStorage.getItem("StateName"));
    setGender(localStorage.getItem("GenName"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    axios
      .put(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        joining,
        state,
        gender,
      })
      .then(() => {
        navigate("/list", { replace: true });
      });
  };
  return (
    <div className="container">
        <h4 className="text-center text-success mt-4">Update Student Details</h4>
      <form className="shadow-lg p-3 mt-4">
        <div className="form-group col-4 m-3">
          <label>First Name</label>
          <input
            className="form-control"
            name=""
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group col-4 m-3">
          <label>Last Name</label>
          <input
            className="form-control"
            name=""
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group col-4 m-3">
          <label>Date of Joining</label>
          <input
            className="form-control"
            name=""
            value={joining}
            type="date"
            format="YYYY-MM-DD"
            placeholder=""
            onChange={(e) => setJoining(e.target.value)}
          />
        </div>

        <div className="form-group col-4 m-3">
          <label>State</label>
         
          <select
            class="form-control"
            value={state}
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
          className="form-group col-4 m-3"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <label>Gender</label>
          <br></br>
          <input type="radio" value="Male" name="gender" /> Male
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" value="Female" name="gender" />{" "}
          Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" value="Other" name="gender" /> Other
        </div>
       <div className="col-4 m-2">
       <button
          className="btn btn-primary"
          type="submit"
          onClick={updateAPIData}
        >
          Update
        </button>
        <Link to="/list">
          <button className="btn btn-primary m-2">Back</button>
        </Link>
       </div>
      </form>
    </div>
  );
}
