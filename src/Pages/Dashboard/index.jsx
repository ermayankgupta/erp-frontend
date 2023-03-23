import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const Dashboard = () => {
  const { setCurrentUser, currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    setCurrentUser();
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <div className="navbar bg-slate-800 sticky top-0 z-50">
        <div className="flex-1">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </label>
          <a className="btn btn-ghost normal-case text-xl text-white">ERP</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyDxiS_ZFj9g6ZUh6S3S5yl9VhwPNGGKd9OEHQohKaA&s" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Change Password</a>
              </li>
              <li>
                <p onClick={handleLogout}>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer drawer-mobile bg-slate-400">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="container mx-auto mt-8">
            <Outlet/>
            <p className="text-white"> {currentUser?.name}</p>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-100 text-base-content">
            <li>
              <Link to={'/'}>Dashboard</Link>
            </li>
            <li>
              <Link to={'/leaves'}>Leaves</Link>
            </li>
            <li>
              <Link to={'/payslips'}>Payslips</Link>
            </li>
            <li>
              <Link to={'/attendence'}>Attendance</Link>
            </li>
            <li>
              <Link to={'/employees'}>Manage Employee</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
