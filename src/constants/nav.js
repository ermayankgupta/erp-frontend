import paths from "./path";
import {MdOutlineDashboard} from 'react-icons/md';
import {MdOutlinePerson2} from 'react-icons/md';
import { FaUmbrellaBeach } from 'react-icons/fa';
import {MdOutlinePayments} from 'react-icons/md';
import { FaCalendarCheck } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';

const nav = [
  {
    type: "sidebar_item",
    name: "Dashboard",
    checkname: "dashboard",
    path: paths.getDashboard(),
    icon: MdOutlineDashboard
  },
  {
    type: "sidebar_item",
    name: "Profile",
    checkname: "profile",
    path: paths.getProfile(),
    icon:MdOutlinePerson2
  },
  {
    type: "sidebar_item",
    name: "Holiday",
    checkname: "holiday",
    path: paths.getHoliday(),
    icon:FaCalendarCheck
  },
  {
    type: "sidebar_group",
    name: "Leave",
    icon:FaUmbrellaBeach,
    subItems: [
      {
        name: "Apply Leave",
        checkname: "apply_leave",
        path: paths.getApplyLeave(),
      },
      {
        name: "Leave Management",
        checkname: "leave_management",
        path: paths.getLeaveManagement(),
      },
      {
        name: "Leave Records",
        checkname: "leave_records",
        path: paths.getLeaveRecords(),
      },
    ],
  },
  {
    type: "sidebar_item",
    name: "Payslips",
    checkname: "payslips",
    path: paths.getPayslips(),
    icon :MdOutlinePayments
  },
  {
    type: "sidebar_item",
    name: "Features",
    checkname: "features",
    path: paths.getFeature(),
    icon:BsCardChecklist
  },
  {
    type: "sidebar_group",
    name: "Employee",
    icon:MdOutlinePerson2,
    subItems: [
      {
        path: paths.getEmployee(),
        name: "Employee",
        checkname: "employee",
      },
      {
        path: paths.getEmployeeAdd(),
        name: "Add Employee",
        checkname: "employee_add",
      },
    ],
  },
  {
    type: "sidebar_group",
    name: "Attendence",
    icon:FaCalendarCheck,
    subItems: [
      {
        path: paths.getAttendence(),
        name: "Attendence",
        checkname: "attendence",
      },
      {
        path: paths.manageAttendence(),
        name: "Manage Attendence",
        checkname: "manage_attendence",
      },
    ],
  },
];

export default nav