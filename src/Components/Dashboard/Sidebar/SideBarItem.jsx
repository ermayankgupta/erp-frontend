import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext/AuthContext";

const SideBarItem = ({ item, isSubItem, Icon }) => {
  const { state } = useAuth();
  return (
    <>
      {state.features[item.checkname] &&
        state.features[item.checkname].allowedTo.includes(state.auth.role) && (
          <div className="my-2 flex items-center">
            {Icon && <Icon className="mr-3 text-sidebarLink" />}
            <Link
              to={item.path}
              className={`cursor-pointer block text-sidebarLink ${
                isSubItem ? "text-base ml-8" : "text-xl"
              } hover:text-white hover:opacity-90`}
            >
              {item.name}
            </Link>
          </div>
        )}
    </>
  );
};

export default SideBarItem;
