import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/Employee"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <EmployeeCard/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
