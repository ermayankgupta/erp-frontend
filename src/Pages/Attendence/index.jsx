import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { months, years } from "../../constants/selectoptions";
import { getRequest } from "../../Utils/Api";
import moment from "moment";
import { toast } from "react-toastify";
import { MdOutlineModeEditOutline } from "react-icons/md";
import useAxiosPrivate from "../../Hooks/Auth/useAxiosPrivate";

const Attendence = () => {
  console.log("Attendance component load");
  useAxiosPrivate();

  const [attendences, setAttendences] = useState([]);
  const [attendenceStatus, setAttendenceStatus] = useState({});
  const [filters, setFilters] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const getAttendences = async () => {
    const response = await getRequest(
      `/attendence/getattendence?month=${filters.month}&year=${filters.year}`
    );
    setAttendences(response.data);
  };
  const getAttendenceStatus = async () => {
    const response = await getRequest("/attendence/status");
    setAttendenceStatus(response.data);
  };
  useEffect(() => {
    getAttendences();
    getAttendenceStatus();
  }, []);

  const columns = [
    {
      maxWidth: "50px",
      name: "",
      selector: (row, index) => index + 1,
    },
    {
      name: "Date",
      selector: (row) => moment(row?.date).format("DD MMMM YYYY"),
    },
    {
      name: "Clock In",
      selector: (row) => moment(row?.clockIn).format("LTS"),
    },
    {
      name: "Clock Out",
      selector: (row) =>
        row?.clockOut ? moment(row?.clockOut).format("LTS") : "-",
    },
    {
      name: "Status",
      selector: (row) => row?.status,
    },
    {
      name: "Total Hour",
      selector: (row) =>
        row?.totalWorkHours
          ? parseFloat(row?.totalWorkHours).toFixed(4) + "hrs"
          : "-",
    },
    {
      name: "Overtime",
      selector: (row) => {
        if (row?.totalWorkHours > 9) {
          return row?.totalWorkHours - 9;
        } else {
          return "-";
        }
      },
    },
    {
      name: "",
      selector: (row) => (
        <>
          <div className="flex justify-between">
            <button className="btn btn-sm my-auto mr-4 cursor-pointer">
              {" "}
              <MdOutlineModeEditOutline />
            </button>
          </div>
        </>
      ),
    },
  ];

  const markAttendence = async (endpoint) => {
    try {
      const response = await getRequest(`/attendence/${endpoint}`);
      if (response.status === 500) {
        toast.error(response.data.error);
      }
      // getAttendences();
      // getAttendenceStatus();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 mt-6 mb-10">
        <div className="bg-white p-4 border border-gray3 rounded shadow-md">
          <h5 className="text-darkgray font-medium dark:text-swapText text-xl mb-5">
            Timesheet
            <small className="text-lightgray ml-2">
              {" "}
              {moment(new Date()).format("D MMM YYYY")}
            </small>
          </h5>
          <div className="bg-gray4 border border-gray3 px-[15px] py-[10px] rounded mb-5">
            <p className="text-xs font-semibold">Punch In at</p>
            <p className="text-sm text-[#727272]">
              {moment(attendenceStatus?.data?.clockIn).format("llll")}
            </p>
          </div>
          {attendenceStatus?.clockin && (
            <div className="flex w-[120px] h-[120px] text-lg items-center justify-center mx-auto rounded-full bg-gray4 border-[5px] border-gray3 dark:border-swapBorderPrimary">
              {attendenceStatus?.clockout ? (
                <p>{attendenceStatus?.data?.totalWorkHours.toFixed(2)} hrs</p>
              ) : (
                <p className="text-sm">
                  {moment(attendenceStatus?.data?.clockIn)
                    .startOf("minute")
                    .fromNow()}
                </p>
              )}
            </div>
          )}
          <div className="flex justify-center">
            {attendenceStatus?.clockin ? (
              <button
                onClick={() => markAttendence("clockout")}
                className="btn btn-primary text-white rounded-full font-bold text-lg hover:bg-btnHover mt-4"
              >
                Punch Out
              </button>
            ) : (
              <button
                onClick={() => markAttendence("clockin")}
                className="btn btn-primary text-white rounded-full font-bold text-lg hover:bg-btnHover mt-4"
              >
                Punch In
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray4 border border-gray3 text-center p-[5px]">
              <p className="text-xs">Break</p>
              <h6 className="text-xs font-semibold">1.24hrs</h6>
            </div>
            <div className="bg-gray4 border border-gray3 text-center p-[5px]">
              <p className="text-xs">Overtime</p>
              <h6 className="text-xs font-semibold">1.24hrs</h6>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 border border-gray3 rounded shadow-md">
          <h5 className="text-darkgray font-medium dark:text-swapText text-xl mb-5">
            Statistics
          </h5>
          <div className="bg-gray4 border border-gray3 px-[15px] py-[10px] rounded mb-5">
            <div className="flex justify-between mb-4">
              <p className="text-xs font-semibold">Today</p>
              <p className="text-xs font-bold">
                {parseFloat(attendenceStatus?.data?.totalWorkHours).toFixed(2)}{" "}
                / <small> 8 hrs</small>
              </p>
            </div>
            <div className="w-full bg-[#e9ecef] rounded-full h-1">
              {attendenceStatus?.data?.totalWorkHours && (
                <div
                  className={`bg-primary h-1 rounded-full w-[${
                    (attendenceStatus?.data?.totalWorkHours / 100) * 8
                  }%]`}
                  // style={{ width: "31%" }}
                ></div>
              )}
            </div>
          </div>
          <div className="bg-gray4 border border-gray3 px-[15px] py-[10px] rounded mb-5">
            <div className="flex justify-between mb-4">
              <p className="text-xs font-semibold">This Week</p>
              <p className="text-xs font-bold">
                {parseFloat(attendenceStatus?.workInWeek).toFixed(2)}/
                <small> 40 hrs</small>
              </p>
            </div>
            <div className="w-full bg-[#e9ecef] rounded-full h-1">
              {attendenceStatus?.workInWeek && (
                <div
                  className={`bg-yellow h-1 rounded-full`}
                  style={{
                    width: `${(attendenceStatus?.workInWeek / 100) * 40}%`,
                  }}
                ></div>
              )}
            </div>
          </div>
          <div className="bg-gray4 border border-gray3 px-[15px] py-[10px] rounded mb-5">
            <div className="flex justify-between mb-4">
              <p className="text-xs font-semibold">This Month</p>
              <p className="text-xs font-bold">
                {parseFloat(attendenceStatus?.workInMonth).toFixed(2)} /
                <small> 160 hrs</small>
              </p>
            </div>
            <div className="w-full bg-[#e9ecef] rounded-full h-1">
              {attendenceStatus.workInMonth && (
                <div
                  className={`bg-success h-1 rounded-full `}
                  style={{
                    width: `${(attendenceStatus.workInMonth / 100) * 160}%`,
                  }}
                ></div>
              )}
            </div>
          </div>
          <div className="bg-gray4 border border-gray3 px-[15px] py-[10px] rounded mb-5">
            <div className="flex justify-between mb-4">
              <p className="text-xs font-semibold">Overtime</p>
              <p className="text-xs font-bold">
                {parseFloat(attendenceStatus?.overtimeInMonth).toFixed(2)}
              </p>
            </div>
            <div className="w-full bg-[#e9ecef] rounded-full h-1">
              <div
                className={`bg-blue h-1 rounded-full`}
                style={{ width: `${attendenceStatus?.overtimeInMonth}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 border border-gray3 rounded shadow-md">
          <h5 className="text-darkgray font-medium dark:text-swapText text-xl mb-5">
            Today Activity
          </h5>
          <ul className="steps steps-vertical">
            <li
              className={`step text-left ${
                attendenceStatus?.clockin && "step-primary"
              }`}
              style={{ textAlign: "left" }}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold"> Punch In at </span>{" "}
                <span className="text-xs text-lightgray">
                  {attendenceStatus?.clockin &&
                    moment(attendenceStatus?.data?.clockIn).format("llll")}
                  {/* Wed, 11th Mar 2019 10.00 AM */}
                </span>
              </div>
            </li>
            <li
              className={`step text-left ${
                attendenceStatus?.clockout && "step-primary"
              }`}
              style={{ textAlign: "left" }}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold"> Punch Out at </span>{" "}
                <span className="text-xs text-lightgray">
                  {attendenceStatus?.clockout &&
                    moment(attendenceStatus?.data?.clockOut).format("llll")}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        {/* <div>
          <label htmlFor="">Date</label>
          <input
            type="date"
            name=""
            id=""
            className="w-full border border-[#D6D6D6] h-[3rem] rounded-md"
            onChange={(e) => console.log(e.target.value)}
          />
        </div> */}
        <div>
          <label htmlFor="">Month</label>
          <select
            className="select select-bordered w-full"
            onChange={(e) => setFilters({ ...filters, month: e.target.value })}
          >
            {months.map((month) => (
              <option
                value={month.value}
                selected={month.value === new Date().getMonth() + 1}
              >
                {month.displayText}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Year</label>
          <select
            className="select select-bordered  w-full"
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          >
            {years.map((year) => (
              <option
                value={year.value}
                selected={year.value == new Date().getFullYear()}
              >
                {year.value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={() => getAttendences()}
            className="btn mt-6 bg-green border text-white text-lg border-green hover:border-green2 hover:bg-green2 w-full"
          >
            Search
          </button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={attendences}
        className="mt-4"
        pagination
        striped
        highlightOnHover
      />
    </>
  );
};

export default Attendence;
