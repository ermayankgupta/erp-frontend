import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import DasboardNavbar from "../../Components/Dashboard/DasboardNavbar";
import DashboardContent from "../../Components/Dashboard/DashboardContent";
import DashboardSidebar from "../../Components/Dashboard/Sidebar";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import useAxiosPrivate from "../../Hooks/Auth/useAxiosPrivate";
import useRefreshToken from "../../Hooks/Auth/useRefreshToken";
import { getRequest } from "../../Utils/Api";

const DashboardLayout = () => {
  console.log("Dashboard layout load")

  const refresh = useRefreshToken();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();

  // useAxiosPrivate();

  useEffect(() => {
    if (!isLoading) {
      if (location.pathname === "/login" && state.auth.token) {
        navigate("/");
      } else {
        navigate(location.pathname);
      }
    }
  }, [isLoading]);

  // useEffect(() => {
  //   const inactivityTime = 15000;
  //   let timeoutId;

  //   const resetTimer = () => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       dispatch({ type: "logout" })
  //       navigate('/login');
  //     }, inactivityTime);
  //   };

  //   resetTimer();

  //   const onActivity = () => {
  //     resetTimer();
  //   };

  //   document.addEventListener('mousemove', onActivity);
  //   document.addEventListener('keypress', onActivity);

  //   return () => {
  //     clearTimeout(timeoutId);
  //     document.removeEventListener('mousemove', onActivity);
  //     document.removeEventListener('keypress', onActivity);
  //   };
  // }, [navigate]);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
        const response = await getRequest("/features/");
        if (response?.status === 200) {
          dispatch({
            type: "features",
            payload: response?.data[0],
          });
        }
      } catch (err) {
        console.log(err, "from dashboardLayout");
      } finally {
        setIsLoading(false);
      }
    };

    !state.auth.token ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <>loading...</>
      ) : state.auth.token ? (
        <>
          <DasboardNavbar />
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <DashboardContent />
            <DashboardSidebar />
          </div>
        </>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </>
  );
};

export default DashboardLayout;
