import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { employes } = props;
  return (
    <div>
      <ul className="list-group">
        {employes.map((user) => (
          <li className="list-group-item list-group-item-action" key={user.id}>
            <Link
              to={`/employes/${user.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
