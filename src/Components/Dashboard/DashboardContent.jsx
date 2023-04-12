import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import routes from "../../constants/routes";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import NotFound from "../../Pages/NotFound";
import Breadcums from "./Breadcums";

const DashboardContent = () => {
  const { state } = useAuth();

  return (
    <>
      <div className="drawer-content">
        <div className="container p-4 mx-auto mt-8">
        <Breadcums/>
          <Routes>
            {routes.map((route, index) => {
              if (state.features[route.checkname]) {
                if (
                  state.features[route.checkname].allowedTo.includes(
                    state.auth.role
                  )
                ) {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={<route.element />}
                    />
                  );
                }
              } else {
                return;
              }
            })}
            <Route path="*" element={<NotFound />} />
          </Routes> 
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
