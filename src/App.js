import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/Employee"
import axios from "axios";

function App() {
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=25&nat=us")
    .then(allUsers => {
      setEmployeeState(allUsers.data.results.map(result => {
        let employeeData = {
          firstName: result.name.first,
          lastName: result.name.last,
          email: result.email,
          state: result.location.state,
          age: result.dob.age,
          gender: result.gender,
          id: result.login.uuid
        }

        return employeeData;
      }))
    })
  }, [])

  return (
      <div>
        <Navbar />
        <Wrapper>
<div className="container mt-4">
<table className="table">
  <thead>
    <tr>
      <th scope="col-2">First</th>
      <th scope="col-2">Last</th>
      <th scope="col-2">Email</th>
      <th scope="col-2">State</th>
      <th scope="col-2">Age</th>
      <th scope="col-2">Gender</th>
    </tr>
  </thead>
  <tbody>
    {employeeState.map(employee => <EmployeeCard
      firstName={employee.firstName}
      lastName={employee.lastName}
      email={employee.email}
      state={employee.state}
      age={employee.age}
      gender={employee.gender}
      />
      )}
  </tbody>
</table>
</div>
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
