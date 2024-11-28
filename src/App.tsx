import React from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import AdminHome from "./pages/AdminHome";
import AdminProduct from "./pages/AdminProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/product" element={<AdminProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
