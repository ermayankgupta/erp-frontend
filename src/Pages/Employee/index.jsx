import React, { useEffect, useState } from "react";
import { getRequest } from "../../Utils/Api";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async() =>{
    const response = await getRequest("/employee");
    setEmployees(response.data);
  }
  useEffect( () => {
    getEmployees()
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>department</th>
              <th>birthday</th>
              <th>operation</th>
            </tr>
          </thead>
          {employees.length > 0 && (
            <tbody>
              {employees?.map((employee, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                  <td>{employee.department}</td>
                  <td>{employee.birthday}</td>
                  <td>edit</td>
                </tr>
              ))}
            </tbody>
          )}
        
        </table>
      </div>
    </>
  );
};

export default Employee;
