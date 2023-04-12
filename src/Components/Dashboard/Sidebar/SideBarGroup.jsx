import React, { useEffect, useState } from "react";
import { DownArrow } from "../../../constants/images";
import { useAuth } from "../../../Context/AuthContext/AuthContext";
import SideBarItem from "./SideBarItem";

const SideBarGroup = ({ item, Icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer text-sidebarLink hover:text-white hover:opacity-90 my-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          {Icon && <Icon className="mr-3 text-sidebarLink" />}
          <p className="text-xl"> {item.name}</p>
        </div>
        <img src={DownArrow} alt="" className={`${open && "rotate-180"} w-6`} />
      </div>
      {open && (
        <>
          {item.subItems.map((subItem, index) => {
            return (
              <>
                <div key={index}>
                  <SideBarItem item={subItem} isSubItem={true} />
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default SideBarGroup;
