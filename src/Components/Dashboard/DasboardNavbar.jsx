import React from "react";
import { useNavigate } from "react-router-dom";
import { PersonIcon } from "../../constants/images";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const DasboardNavbar = () => {
  const {
    state: { auth },
    dispatch,
  } = useAuth();
  
  return (
    <>
      <div className="navbar bg-gradient-to-r from-[#ff9b44] to-[#fc6075] sticky top-0 z-50">
        <div className="flex-1">
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#fff"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </label>
          <p className="btn btn-ghost normal-case text-xl text-white">Zerpin</p>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={auth.profile ?? PersonIcon} alt="profile-iconz" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="text-black">Profile</p>
              </li>
              <li>
                <p className="text-black">Change Password</p>
              </li>
              <li>
                <p
                  className="text-black"
                  onClick={() => dispatch({ type: "logout" })}
                >
                  Logout
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DasboardNavbar;
