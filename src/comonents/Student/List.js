import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Footer from "./Footer";

export default function List() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/fakeData`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, joining, state, gender } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Date of Joining", joining);
    localStorage.setItem("StateName", state);
    localStorage.setItem("GenName", gender);
  };

  const getData = () => {
    axios
      .get(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62b9d8f8ff109cd1dc9c7ee3.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <div className="container mt-2 col-8">
        <div>
          <h1 className="text-center text-success">Employee Details</h1>
          <Link to="/create">
            <button className="btn btn-primary">Create</button>
          </Link>
          <Link to="/">
            <button className="btn btn-primary float-end">Back</button>
          </Link>
        </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Date of Joining</th>
                <th scope="col">State</th>
                <th scope="col">Gender</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            {APIData.map((data) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.joining}</td>
                    <td>{data.state}</td>
                    <td>{data.gender}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn btn-primary"
                          onClick={() => setData(data)}
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => onDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to="/details">
                        <button
                          className="btn btn-primary"
                          onClick={() => setData(data)}
                        >
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      {/* <Footer /> */}
    </>
  );
}
