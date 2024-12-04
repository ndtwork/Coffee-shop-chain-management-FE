import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import AdminHome from "./pages/AdminHome";
import AdminProduct from "./pages/AdminProduct";
import AdminMaterial from "./pages/AdminMaterial";
import AdminImportOrder from "./pages/AdminImportOrder";
import AdminSupplier from "./pages/AdminSupplier";
import AdminBranch from "./pages/AdminBranch";
import AdminEmployee from "./pages/AdminEmployee";
import AdminAccount from "./pages/AdminAccount";
import AdminLayout from "./components/Layouts/AdminLayout";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
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
          <Route
            path="/admin/material"
            element={
              <AdminLayout>
                <AdminMaterial />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/import-order"
            element={
              <AdminLayout>
                <AdminImportOrder />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/supplier"
            element={
              <AdminLayout>
                <AdminSupplier />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/branch"
            element={
              <AdminLayout>
                <AdminBranch />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/employee"
            element={
              <AdminLayout>
                <AdminEmployee />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/account"
            element={
              <AdminLayout>
                <AdminAccount />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
