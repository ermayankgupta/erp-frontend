import Attendence from "../Pages/Attendence";
import Dashboard from "../Pages/Dashboard";
import Employee from "../Pages/Employee";
import AddEmployee from "../Pages/Employee/AddEmployee";
import Leave from "../Pages/Leave";
import Payslips from "../Pages/Payslips";
import Features from "../Pages/Features";
import Profile from "../Pages/Profile"
import paths from "./path";
import ChangePassword from "../Pages/Change Password/ChangePassword";
import Holiday from "../Pages/Holiday";

const routes = [
  {
    path: paths.getDashboard(),
    name: "Dashboard",
    checkname: "dashboard",
    element: Dashboard,
  },
  {
    path: paths.getProfile(),
    name: "Profile",
    checkname: "profile",
    element: Profile,
  },
  {
    path: paths.getHoliday(),
    name: "Holiday",
    checkname: "holiday",
    element: Holiday,
  },
  {
    path: paths.getApplyLeave(),
    name: "Apply Leave",
    checkname: "apply_leave",
    element: Leave,
  },
  {
    path: paths.getLeaveRecords(),
    name: "Apply Records",
    checkname: "apply_record",
    element: Leave,
  },
  {
    path: paths.getLeaveManagement(),
    name: "Leave Management",
    checkname: "leave_management",
    element: Leave,
  },
  {
    path: paths.getPayslips(),
    name: "Payslips",
    checkname: "payslips",
    element: Payslips,
  },
  {
    path: paths.getAttendence(),
    name: "Attendence",
    checkname: "attendence",
    element: Attendence,
  },
  {
    path: paths.manageAttendence(),
    name: "Manage Attendence",
    checkname: "manage_attendence",
    element: Attendence,
  },
  {
    path: paths.getEmployee(),
    name: "Employee",
    checkname: "employee",
    element: Employee,
  },
  {
    path: paths.getEmployeeAdd(),
    name: "Add Employee",
    checkname: "employee_add",
    element: AddEmployee,
  },
  {
    path: paths.getFeature(),
    name: "Features",
    checkname: "features",
    element: Features,
  },
  {
    path: paths.getChangePassword(),
    name: "Change Password",
    checkname: "change_password",
    element: ChangePassword,
  },
];

export default routes;
