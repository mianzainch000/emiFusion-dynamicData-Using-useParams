import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Employes() {
  const { id } = useParams();
  const [employe, setEmploye] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.ir/users/${id}`)
      .then((response) => response.json())
      .then((json) => setEmploye(json))
      .catch((error) => console.error(error));
  }, [id]);

  if (!employe) {
    return <div>Employe not found.</div>;
  }

  const { name, email, phone, website } = employe;
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{website}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Employes;
