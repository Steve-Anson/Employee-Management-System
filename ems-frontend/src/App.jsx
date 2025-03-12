import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepartmentComponent from "./components/DepartmentComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:3001*/}
          <Route path="/" element={<ListEmployeeComponent />} />

          {/*http://localhost:3001/employees*/}
          <Route path="/employees" element={<ListEmployeeComponent />} />

          {/*http://localhost:3001/add-employee*/}
          <Route path="/add-employee" element={<EmployeeComponent />} />

          {/*http://localhost:3001/edit-employee/:id*/}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />} />

          {/*http://localhost:3001/departments*/}
          <Route path="/departments" element={<ListDepartmentComponent />} />

          {/*http://localhost:3001/add-department*/}
          <Route path="/add-department" element={<DepartmentComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
