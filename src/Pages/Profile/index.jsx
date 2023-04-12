import moment from "moment";
import React from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const Profile = () => {
  const {
    state: { auth },
  } = useAuth();
  return (
    <>
      <div className="p-4 bg-white border border-gray3 shadow-sm">
        <div className="grid md:grid-cols-2">
          <div className="border-dashed md:border-r-2 border-lightgray py-4 md:-py-4">
            <div className="md:flex md:flex-cols text-center md:text-left">
              <img
                src={auth.profile}
                alt=""
                className="w-32 h-32 rounded-full md:mx-0 mx-auto"
              />
              <div className="ml-4 md:mt-0 mt-4">
                <p className="text-black font-medium text-2xl capitalize">{auth.name}</p>
                <p className="text-lightgray text-sm capitalize">
                  {auth.role} Team
                </p>
                {/* <p className="text-black">{auth.email}</p>

                <p className="text-black">{moment(auth.birthday).format()}</p> */}

                <p className="text-lightgray text-xs capitalize my-2">
                  {auth.role}
                </p>
                <p className="font-medium lightgray text-sm">
                  {" "}
                  Employee Code: {"BBE0060"}
                </p>

                <p className="text-lightgray text-sm">
                  {" "}
                  Date of Join: {moment(auth.createdAt).format("DD MMMM YYYY")}
                </p>
              </div>
            </div>
          </div>
          <div className="md:py-0 py-4">
            <div className="md:ml-8">
              <ul className="w-full">
                <li className="mb-2">
                  <span className="w-1/4 inline-block text-black2 font-medium">
                    Phone:
                  </span>
                  <span className="text-blue2 text-sm font-medium">
                    {auth.phone}
                  </span>
                </li>
                <li className="mb-2">
                  <span className="w-1/4 inline-block text-black2 font-medium">
                    Email:
                  </span>
                  <span className="text-blue2 text-sm font-medium">
                    {auth.email}
                  </span>
                </li>
                <li className="mb-2">
                  <span className="w-1/4 inline-block text-black2 font-medium">
                    Birthday:
                  </span>
                  <span className="text-lightgray text-sm font-medium">
                    {moment(auth.birthday).format("DD MMMM YYYY")}
                  </span>
                </li>
                <li className="mb-2">
                  <span className="w-1/4 inline-block text-black2 font-medium">
                    Gender:
                  </span>
                  <span className="text-lightgray text-sm font-medium">
                    Male
                  </span>
                </li>
                <li className="mb-2">
                  <span className="w-1/4 inline-block text-black2 font-medium">
                    Address:
                  </span>
                  <span className="text-lightgray text-sm font-medium">
                    #3118,Sector 71 Mohali 160071
                  </span>
                </li>
                <li className="mb-2">
                  <span className="w-1/4 inline-block text-black2 font-medium">
                    Reports To:
                  </span>
                  <span className="text-lightgray text-sm font-medium">
                    Varun Kumar
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
