import { useState, useEffect } from "react";
import {
  createDepartment,
  getDepartmentById,
} from "../services/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDepartmentById(id)
        .then((response) => {
          const department = response.data;
          setDepartmentName(department.departmentName);
          setDepartmentDescription(department.departmentDescription);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  function saveDepartment(e) {
    e.preventDefault();
    const department = { departmentName, departmentDescription };
    createDepartment(department)
      .then((response) => {
        console.log(response.data);
        navigate("/departments");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 pt-4">
          <h2 className="text-center">{id ? "Update" : "Add"} Department</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Department Name</label>
                <input
                  type="text"
                  name="departmentName"
                  placeholder="Enter Department Name"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Department Description</label>
                <input
                  type="text"
                  name="departmentDescription"
                  placeholder="Enter Department Description"
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <button
                className="btn btn-success mt-2"
                onClick={(e) => saveDepartment(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
