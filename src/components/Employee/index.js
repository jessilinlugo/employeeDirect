import React from "react";

function Employee({firstName, lastName, email, state, age, gender}) {
  return (
<div>
  <tr>
    <td className="first-name" key="1">{firstName}</td>
    <td className="last-name" key="2">{lastName}</td>
    <td className="email" key="3">{email}</td>
    <td className="state" key="4">{state}</td>
    <td className="age" key="5">{age}</td>
    <td className="gender" key="6">{gender}</td>
  </tr>
</div>
  );
}

export default Employee;
