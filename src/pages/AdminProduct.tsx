import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import ProductList from "../components/List/ProductList.tsx";
import ProductForm from "../components/Form/ProductForm.tsx";

const AdminProduct: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddProduct = () => {
    setSelectedProductId(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product Management
      </Typography>
      {!isFormOpen ? (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            style={{ marginBottom: "20px" }}
          >
            + Add Item
          </Button>
          <ProductList onEdit={setSelectedProductId} onView={setSelectedProductId} onOpenForm={setIsFormOpen} />
        </>
      ) : (
        <ProductForm productId={selectedProductId} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default AdminProduct;
