import React from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const Dashboard = () => {
  const { state } = useAuth();
  return (
    <>
      <p className="text-black"> {state.auth?.name}</p>
    </>
  );
};

export default Dashboard;
