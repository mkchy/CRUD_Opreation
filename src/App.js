import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Details from './comonents/Student/Details';
import List from './comonents/Student/List';
import SignUp from './comonents/Registraion/SignUp';
import SignIn from './comonents/Login/SignIn';
import Create from './comonents/Student/Create';
import Update from './comonents/Student/Update';
// import Create from './comonents/Employee/Create';
// import Details from './comonents/Employee/Details';
// import List from './comonents/Employee/List';
// import Update from './comonents/Employee/Update';
// import Login from './comonents/Login/Login';
// import Registration from './comonents/Registraion/Registration';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     <BrowserRouter>
     <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/list" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="update" element={<Update />} />
        <Route path="details" element={<Details />} /> */}
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="create" element={<Create />} />
        <Route path="update" element={<Update />} />
        <Route path="list" element={<List />} />
        <Route path="details" element={<Details />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
