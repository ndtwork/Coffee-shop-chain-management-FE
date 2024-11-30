import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import AdminHome from "./pages/AdminHome";
import AdminProduct from "./pages/AdminProduct";
import AdminLayout from "./components/Layouts/AdminLayout";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Admin Routes */}
          <Route
            path="/admin/home"
            element={
              <AdminLayout>
                <AdminHome />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/product"
            element={
              <AdminLayout>
                <AdminProduct />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
