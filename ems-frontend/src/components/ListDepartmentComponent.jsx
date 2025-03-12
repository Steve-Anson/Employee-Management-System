import { useState } from "react";

const ListDepartmentComponent = () => {
  let dummyData = [
    {
      id: 1,
      departmentName: "R&D",
      departmrntDescription: "Research and Development",
    },
    {
      id: 2,
      departmentName: "HR",
      departmrntDescription: "Human Resources",
    },
    {
      id: 3,
      departmentName: "IT",
      departmrntDescription: "Information Technology",
    },
  ];

  const [departments, setDepartments] = useState(dummyData);

  return (
    <div className="container">
      <h1 className="text-center mt-4">List of Departments</h1>
      <table className="table table-striped table-bordered mt-2">
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmrntDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;
