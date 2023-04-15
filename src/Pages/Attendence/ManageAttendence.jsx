import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import useAxiosPrivate from "../../Hooks/Auth/useAxiosPrivate";
import { getRequest } from "../../Utils/Api";
import moment from "moment";
import { toast } from "react-toastify";

const ManageAttendence = () => {
  useAxiosPrivate();
  const [attendenceRequests, setAttendenceRequests] = useState([]);

  useEffect(() => {
    const getAttendenceRequest = async () => {
      const response = await getRequest("/attendence/attendencerequest");
      setAttendenceRequests(response.data);
    };
    getAttendenceRequest();
  });

  const changeRequest =async(status,id)=>{
    try{
      const response = await getRequest(`/attendence/updateattendence?id=${id}&status=${status}`)
      toast.success(response.data.message)
      debugger
    }catch(err){
      console.log(err)
    }
  }
  const columns = [
    {
      maxWidth: "50px",
      name: "",
      selector: (row, index) => index + 1,
    },
    {
      maxWidth:"50px",
      name: "",
      selector: (row) => (
        <img
          src={row.employee.profile}
          alt=""
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.employee.name,
    },
    {
      name: "Date",
      selector: (row) => moment(row?.date).format("DD MMMM YYYY"),
    },
    {
      name: "Clock In time",
      selector: (row) => moment(row?.editClockIn).format("LTS"),
    },
    {
      name: "Clock Out time",
      selector: (row) => moment(row?.editClockOut).format("LTS"),
    },
    {
      name: "Reason",
      selector: (row) => row.editReason,
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          <select
            className="select select-bordered w-full py-0 my-2"
            onChange={(e) => changeRequest(e.target.value,row._id)}
          >
            <option value="Pending" selected={row.editStatus === 'Pending'}>Pending</option>
            <option value="Approved" selected={row.editStatus === 'Approved'}>Approved</option>
            <option value="Rejected" selected={row.editStatus === 'Rejected'}>Rejected</option>
          </select>
        </>
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={attendenceRequests}
      className="mt-4"
      pagination
      striped
      highlightOnHover
    />
  );
};

export default ManageAttendence;
