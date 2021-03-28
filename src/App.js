import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Employee from "./components/Employee";

function App() {
  return (
      <div>
        <Navbar />
        <Wrapper>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
