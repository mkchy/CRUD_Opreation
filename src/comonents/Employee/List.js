import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";

export default function List() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/CRUD`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let {
      id,
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
    } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Middle Name", middleName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Email Id", email);
    localStorage.setItem("Mobile No", mobile);
    localStorage.setItem("Address", address);
    localStorage.setItem("City Name", city);
    localStorage.setItem("State Name", state);
    localStorage.setItem("Pin Code", pinCode);
    localStorage.setItem("Date of Birth", dob);
    localStorage.setItem("Document", doc);
    localStorage.setItem("Gender Name", gender);
    localStorage.setItem("Message", message);
  };

  const getData = () => {
    axios
      .get(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/CRUD`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/CRUD/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="container card mt-4">
      <h1 className="text-center text-success">All Student List</h1>
      <Table borderless>
        <thead>
          <tr class="table-primary">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>State</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        {APIData.map((data) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.mobile}</td>
                <td>{data.email}</td>
                <td>{data.state}</td>
                <td>{data.dob}</td>
                <td>{data.gender}</td>
                <td>
                  <Link to="/update">
                    <Button color="primary" onClick={() => setData(data)}>
                      Update
                    </Button>{" "}
                  </Link>
                  <Button color="primary" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>{" "}
                  <Link to="/details">
                    <Button color="primary">Details</Button>{" "}
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <div className="text-center mb-3">
        <Link to="/create">
          <Button color="primary">Back</Button>{" "}
        </Link>
      </div>
    </div>
  );
}
