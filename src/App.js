import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/Employee"
import axios from "axios";


function App() {
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=45&nat=us")
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

  const filterByCity = (event) => {
    let city = event.target.value.toLowerCase();
    setEmployeeState(employeeState.filter(employee => {
      return employee.city.toLowerCase().includes(city);
    }))
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col">
              <strong>Search for a Smiley Employee!</strong>
            </div>

            <div className="col-3">
              <button type="button" class="btn btn-success" onClick={(e) => sortByFirstName(e)}>Sort Employee by First Name</button>
            </div>
            <div className="col-3">
              <input type="text" onChange={(e) => { filterByCity(e) }} className="form-control" placeholder="Filter Employees by City" />
            </div>
            <div className="col-3">
              <button type="button" class="btn btn-secondary" onClick={refreshPage}>Refresh Employees</button>
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
