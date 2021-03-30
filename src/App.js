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
            city: result.location.city,
            state: result.location.state,
            age: result.dob.age,
          }

          return employeeData;
        }))
      })
  }, [])


  const sortByFirstName = (event) => {
    let sortedEmployees = employeeState.map(employee => employee)
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    setEmployeeState(sortedEmployees);
  }

  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <strong>Search for a Smiley Employee!</strong>
    </div>
    <div className="col-4">
      <button type="button" class="btn btn-success" onClick={(e) => sortByFirstName(e)}>Sort by Employee First Name</button>
    </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-2">First</th>
                <th scope="col-2">Last</th>
                <th scope="col-2">Email</th>
                <th scope="col-2">City</th>
                <th scope="col-2">State</th>
                <th scope="col-2">Age</th>

              </tr>
            </thead>
            <tbody>
              {employeeState.map(employee => <EmployeeCard
                firstName={employee.firstName}
                lastName={employee.lastName}
                email={employee.email}
                city={employee.city}
                state={employee.state}
                age={employee.age}
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
