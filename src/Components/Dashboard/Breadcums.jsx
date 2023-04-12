import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcums = () => {
  const location = useLocation();
  const l = location.pathname.split("/");
  const breadcrumbs = l.filter(str => str !== "")
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to="/" className="cursor-pointer">Dashboard</Link>
        </li>
        {breadcrumbs.map((la) => (
          <li>
            <p className="capitalize cursor-pointer">{la}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcums;
