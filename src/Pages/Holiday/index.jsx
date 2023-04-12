import moment from "moment";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { getRequest } from "../../Utils/Api";
import { MdOutlineModeEditOutline } from "react-icons/md";
import AddHoliday from "./AddHoliday";

const Holiday = () => {
  const { state } = useAuth();
  const [holidays, setHolidays] = useState([]);
  useEffect(() => {
    const getHolidays = async () => {
      const response = await getRequest("/holiday");
      setHolidays(response.data);
    };
    getHolidays();
  }, []);

  
  const columns = [
    {
      name: "#",
      maxWidth: "100px",
      selector: (row,index) => index + 1,
    },
    {
      name: "Holiday",
      selector: (row) => row?.name,
    },
    {
      name: "Date",
      selector: (row) => moment(row?.date).format("DD MMMM YYYY"),
    },
    {
      name: "",
      selector: (row) => (
        <>
          <button className="btn btn-sm my-auto btn-warning mr-4">
            <MdOutlineModeEditOutline />
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <AddHoliday setHolidays={setHolidays} holidays={holidays}/>
      <DataTable data={holidays} columns={columns} className="mt-4" striped highlightOnHover pagination/>
    </>
  );
};

export default Holiday;
