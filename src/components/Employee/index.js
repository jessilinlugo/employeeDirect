import React from "react";

function Employee({firstName, lastName, email, city, state, age}) {
  return (
<>
  <tr>
    <td className="first-name" key="1">{firstName}</td>
    <td className="last-name" key="2">{lastName}</td>
    <td className="email" key="3">{email}</td>
    <td className="city" key="4">{city}</td>
    <td className="state" key="5">{state}</td>
    <td className="age" key="6">{age}</td>
  
  </tr>
</>
  );
}

export default Employee;
