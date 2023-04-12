import React from "react";

import nav from "./../../../constants/nav";
import SideBarGroup from "./SideBarGroup";
import SideBarItem from "./SideBarItem";

const DashboardSidebar = () => {
  
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* <ul className="menu p-4 w-80 bg-sidebar text-base-content">
          <li className="text-sidebarLink">
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li className="text-sidebarLink">
            <Link to={"/leave/apply_leave"}>Leaves</Link>
          </li>
          <li className="text-sidebarLink">
            <Link to={"/payslips"}>Payslips</Link>
          </li>
          <li className="text-sidebarLink">
            <Link to={"/attendance"}>Attendance</Link>
          </li>
          <li className="text-sidebarLink">
            <Link to={"/employees"}>Manage Employee</Link>
          </li>
        </ul> */}
        <div className="menu p-4 w-80 bg-sidebar text-base-content">
          {nav.map((item, index) => {
            if (item.type === "sidebar_item") {
              return <SideBarItem item={item} Icon={item.icon} />;
            }
            if (item.type === "sidebar_group") {
              return (
                <>
                <SideBarGroup item={item} Icon={item.icon} />
                </>
              );
            }
            return ""
          })}
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
