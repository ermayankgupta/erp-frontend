import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import DataTable from "react-data-table-component";
import { patchRequest } from "../../Utils/Api";
const Features = () => {
  const [featureData, setFeatureData] = useState();
  const { state } = useAuth();

  useEffect(() => {
    const myArray = Object.keys(state?.features).map((key) => {
      return { id: key, ...state?.features[key] };
    });
    setFeatureData(myArray);
  }, [state.features]);

  const columns = [
    {
      name: "Name",
      maxWidth: "150px",
      selector: (row) => row?.name,
    },
    {
      name: "Checkname",
      maxWidth: "150px",
      selector: (row) => row?.checkname,
    },
    {
      name: "Assign To",
      maxWidth: "100%",
      selector: (row) => (
        <>
          <div className="flex gap-10">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={row.allowedTo.includes("developer")}
                  className="checkbox checkbox-primary checkbox-sm"
                  onChange={(e) => updateFeature(e, row, "developer")}
                />
                <span className="label-text ml-2">Developer</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={row.allowedTo.includes("manager")}
                  className="checkbox checkbox-primary checkbox-sm"
                  onChange={(e) => updateFeature(e, row, "manager")}
                />
                <span className="label-text ml-2">Manager</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={row.allowedTo.includes("hr")}
                  className="checkbox checkbox-primary checkbox-sm"
                  onChange={(e) => updateFeature(e, row, "hr")}
                />
                <span className="label-text ml-2">Hr</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={row.allowedTo.includes("account")}
                  className="checkbox checkbox-primary checkbox-sm"
                  onChange={(e) => updateFeature(e, row, "account")}
                />
                <span className="label-text ml-2">Account</span>
              </label>
            </div>
          </div>
        </>
      ),
    },
  ];

  const updateFeature = async (event, selectedData, role) => {
    if (event.target.checked) {
      selectedData.allowedTo.push(role);
    } else {
      selectedData.allowedTo = selectedData.allowedTo.filter((r) => r !== role);
    }
    await patchRequest(`/features/update/${selectedData._id}`, selectedData)
  };

  return (
    <>
      <DataTable columns={columns} data={featureData} />
    </>
  );
};

export default Features;
