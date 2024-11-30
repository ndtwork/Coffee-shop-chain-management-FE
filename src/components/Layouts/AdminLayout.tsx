// components/Layouts/AdminLayout.tsx
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
};

export default AdminLayout;
