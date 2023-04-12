import moment from "moment";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdOutlineDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import useAxiosPrivate from "../../Hooks/Auth/useAxiosPrivate";
import { getRequest } from "../../Utils/Api";

const Employee = () => {
  useAxiosPrivate();
  const [employees, setEmployees] = useState([]);
  const getEmployees = async() =>{
    const response = await getRequest("/employee");
    setEmployees(response.data);
  }
  useEffect( () => {
    getEmployees()
  }, []);

  const columns = [
    {
      name: "#",
      maxWidth:"10px",
      selector: (row,index) => index + 1,
    },
    {
      name: "",
      maxWidth:"100px",
      selector: (row) => (
        <img src={row?.profile} alt="pic" className="w-10 rounded-full" />
      ),
    },
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
    },
    {
      name: "Role",
      selector: (row) => row?.role,
    },
    {
      name: "Department",
      selector: (row) => row?.department,
    },
    {
      name: "birthday",
      selector: (row) => moment(row?.birthday).format("DD MMMM YYYY"),
    },
    {
      name: "",
      selector: (row) => (
        <>
        <div className="flex justify-between">

          <button className="btn btn-sm my-auto btn-warning mr-4"> <MdOutlineModeEditOutline/></button>
          <button className="btn btn-sm my-auto btn-danger" onClick={()=>console.log(row)}>
          <MdOutlineDeleteOutline/>
          </button>
        </div>
        </>
      ),
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={employees} striped highlightOnHover pagination />
    </>
  );
};

export default Employee;
