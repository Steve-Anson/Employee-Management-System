import { useEffect, useState } from "react";
import { listDepartments } from "../services/DepartmentService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listDepartments()
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function updateDepartment(id) {
    navigate(`/edit-department/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center mt-4">List of Departments</h2>
      <Link to="/add-department" className="btn btn-primary">
        Add department
      </Link>
      <table className="table table-striped table-bordered mt-2">
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateDepartment(department.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;
