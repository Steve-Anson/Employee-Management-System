import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:3001*/}
          <Route path="/" element={<ListEmployeeComponent />} />{" "}
          {/*http://localhost:3001/employees*/}
          <Route path="/employees" element={<ListEmployeeComponent />} />{" "}
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
