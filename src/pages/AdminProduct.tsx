import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import ProductList from "../components/List/ProductList.tsx";
import ProductForm from "../components/Form/ProductForm.tsx";
import { Product } from "../types/product.ts";

const AdminProduct: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddProduct = (product:Product) => {
    setSelectedProduct(product)
    setIsFormOpen(true);
  };
  const handleCreate = () => {
    setIsFormOpen(true);
  };
  const handleEdit = (product:Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };
  const handleDelete = () => {
    setIsFormOpen(true);
  };
  const handleView = () => {
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
            onClick={handleCreate}
            style={{ marginBottom: "20px" }}
          >
            + Add Item
          </Button>
          <ProductList onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
        </>
      ) : (
        <ProductForm product={selectedProduct} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default AdminProduct;
