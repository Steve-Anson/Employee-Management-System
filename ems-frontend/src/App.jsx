import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
